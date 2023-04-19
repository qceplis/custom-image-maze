export class CellView
{
    static width = 50;

    constructor() {}

    show(cell)
    {
        const [x, y] = indicesToCoords(cell.row, cell.col);

        if (cell.visited) this.#showVisited(x, y, CellView.width);
        if (cell.isCurrent) this.#showCurrent(x, y, CellView.width);

        if (cell.isTopVisible)      this.#showTop(x, y, CellView.width);
        if (cell.isRightVisible)    this.#showRight(x, y, CellView.width);
        if (cell.isBottomVisible)   this.#showBottom(x, y, CellView.width);
        if (cell.isLeftVisible)     this.#showLeft(x, y, CellView.width);
    }

    #showVisited(x, y, width)
    {
        fill(200, 0, 255, 100);
        noStroke();
        rect(x, y, width, width);
        stroke(0);
        noFill();
    }

    #showCurrent(x, y, width)
    {
        fill(0, 0, 200, 100);
        noStroke();
        rect(x, y, width, width);
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
    let x = col * CellView.width;
    let y = row * CellView.width;

    return [x, y];
}

export function coordsToIndices(x, y)
{
    let col = floor(x / CellView.width);
    let row = floor(y / CellView.width);

    return [row, col];
}

// const Direction = {
//     Top: 'Top',
//     Right: 'Right'
//     Bottom: 'Bottom',
//     Left: 'Left',
// };