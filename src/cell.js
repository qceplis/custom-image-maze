export class Cell
{
    static width = 50;

    #row;
    #col;

    get row() { return this.#row; }
    get col() { return this.#col; }

    visited = false;

    // Walls
    isTopVisible    = true;
    isRightVisible  = true;
    isBottomVisible = true;
    isLeftVisible   = true;

    constructor(row, col)
    {
        this.#row = row;
        this.#col = col;
    }

    // like neightbours, have an array of weights
    // start at 10, and set to lower weight for desired path

    debugInfo()
    {
        console.log(this.#row, this.#col, this.visited);
    }

    show()
    {
        const [x, y] = indicesToCoords(this.#row, this.#col);

        if (this.visited) this.#showVisited(x, y, Cell.width);

        if (this.isTopVisible)      this.#showTop(x, y, Cell.width);
        if (this.isRightVisible)    this.#showRight(x, y, Cell.width);
        if (this.isBottomVisible)   this.#showBottom(x, y, Cell.width);
        if (this.isLeftVisible)     this.#showLeft(x, y, Cell.width);
    }

    #showVisited(x, y, width)
    {
        fill(200, 0, 255, 100);
        noStroke();
        rect(x, y, Cell.width, Cell.width);
        stroke(0);
        noFill();
    }

    showCurrent()
    {
        const [x, y] = indicesToCoords(this.#row, this.#col);

        fill(0, 0, 200, 100);
        noStroke();
        rect(x, y, Cell.width, Cell.width);
        stroke(0);
        noFill();
    }

    #showTop(x, y, width)
    {
        line(x, y, x + width, y);
    }
    #showRight(x, y, width)
    {
        line(x + width, y, x + width, y + width);
    }
    #showBottom(x, y, width)
    {
        line(x, y + width, x + width, y + width);
    }
    #showLeft(x, y, width)
    {
        line(x, y, x, y + width);
    }
}

export function indicesToCoords(row, col)
{
    let x = col * Cell.width;
    let y = row * Cell.width;

    return [x, y];
}

export function coordsToIndices(x, y)
{
    let col = floor(x / Cell.width);
    let row = floor(y / Cell.width);

    return [row, col];
}

// const Direction = {
//     Top: 'Top',
//     Right: 'Right'
//     Bottom: 'Bottom',
//     Left: 'Left',
// };