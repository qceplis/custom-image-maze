export class DFS
{
    #stack;
    #grid;
    // #current;

    constructor(grid)
    {
        this.#stack = [];
        this.#grid = grid;

        let current = this.#grid.at(floor(this.#grid.rows / 2) - 1, floor(this.#grid.cols / 2) - 1);
        this.#stack.push(current);
    }

    fastLoop()
    {
        while (this.#stack.length)
        {
            this.update();
        }
    }

    update()
    {
        if (this.#stack.length < 1) return;

        let current = this.#stack.pop();
        current.visited = true;
        current.showCurrent();

        const neighbours = this.#grid.neighbours(current);
        const unvisited = neighbours.filter(cell => cell && cell.visited == false);
        
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