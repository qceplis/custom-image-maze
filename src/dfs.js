const SolverState = {
    Running: 'running',
    Finished: 'finished'
};

export class DFS
{
    #stack;
    #grid;

    constructor(grid)
    {
        this.#stack = [];
        this.#grid = grid;

        let current = this.#grid.centerCell();
        this.#stack.push(current);
    }

    fastLoop()
    {
        while (this.#stack.length > 0)
        {
            this.update();
        }
    }

    update()
    {
        const state = this.#update_();
        if (state == SolverState.Finished)
        {
            this.#grid.clearStatuses()
        }
    }

    #update_()
    {
        if (this.#stack.length < 1) return SolverState.Finished;
        
        let current = this.#stack.pop();
        current.visited = true;
        current.isCurrent = true;

        this.#grid.updateGridState();

        const neighbours = this.#grid.neighbours(current);
        const unvisited = neighbours.filter(cell => cell && !cell.visited);

        current.isCurrent = false;

        if (unvisited.length < 1) return SolverState.Running;

        this.#stack.push(current);

        let next = this.#nextCell(unvisited);
        this.#grid.removeWalls(current, next);

        this.#stack.push(next);
    }

    #nextCell(unvisited)
    {
        const randomIndex = floor(random(0, unvisited.length));
        return unvisited[randomIndex];
    }
}