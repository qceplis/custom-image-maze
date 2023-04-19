export class DFS
{
    #stack;
    #grid;

    constructor(grid)
    {
        this.#stack = [];
        this.#grid = grid;

        let current = this.#grid.at(0, 0); //centerCell();
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
        if (this.#stack.length < 1) return;
        
        let current = this.#stack.pop();
        current.visited = true;
        this.#grid.updateGridState();

        const neighbours = this.#grid.neighbours(current);
        const unvisited = neighbours.filter(cell => cell && !cell.visited);

        if (unvisited.length < 1) return;

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