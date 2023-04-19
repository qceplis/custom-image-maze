import { Cell } from '@/models/cell'

export class Grid
{
    #grid;
    rows;
    cols;

    onGridChanged;

    constructor(rows, cols)
    {
        this.rows = rows;
        this.cols = cols;

        this.#populateGrid();
    }

    #populateGrid()
    {
        this.#grid = [];

        for (let row = 0; row < this.rows; ++row)
        {
            for (let col = 0; col < this.cols; ++col)
            {
                let cell = new Cell(row, col);
                this.#grid.push(cell);
            }
        }
    }

    neighbours(cell)
    {
        return [
            this.at(cell.row - 1, cell.col), // top
            this.at(cell.row, cell.col + 1), // right
            this.at(cell.row + 1, cell.col), // bottom
            this.at(cell.row, cell.col - 1), // left
        ];
    }

    removeWalls(primary, secondary)
    {
        const deltaCol = primary.col - secondary.col;
        if (deltaCol != 0)
        {
            switch (deltaCol)
            {
                case -1: // | primary 1 | secondary 2
                    primary.isRightVisible = false;
                    secondary.isLeftVisible = false;
                    break;
                case 1: // secondary 1 | primary 2 |
                    primary.isLeftVisible = false;
                    secondary.isRightVisible = false;
                    break;
                default:
                    console.log("Non-adjacent cells by col: " + deltaCol);
                    // primary.debugInfo();
                    // secondary.debugInfo();
                    return true;
            }
        }
        const deltaRow = primary.row - secondary.row;
        if (deltaRow != 0)
        {
            switch (deltaRow)
            {
                case -1: // / primary 1 /over/ secondary 2
                    primary.isBottomVisible = false;
                    secondary.isTopVisible = false;
                    break;
                case 1: // secondary 1 /over/ primary 2 /
                    primary.isTopVisible = false;
                    secondary.isBottomVisible = false;
                    break;
                default:
                    console.log("Non-adjacent cells by row: " + deltaRow);
                    // primary.debugInfo();
                    // secondary.debugInfo();
                    return true;
            }
        }

        return false;
    }

    centerCell()
    {
        return this.at(floor(this.rows / 2) - 1, floor(this.cols / 2) - 1);
    }

    forEach(lambda)
    {
        this.#grid.forEach(lambda);
    }

    toIndex(row, col)
    {
        return col + row * this.cols;
    }

    atIndex(index)
    {
        if (this.#outOfBoundsByIndex(index))
            return null;
        
        return this.#grid[index];
    }

    at(row, col)
    {
        if (this.#outOfBounds(row, col))
            return null;

        return this.atIndex(this.toIndex(row, col));
    }

    #outOfBoundsByIndex(index)
    {
        return index < 0 || index > this.#grid.length - 1;
    }

    #outOfBounds(row, col)
    {
        return row < 0 || row > this.rows - 1 || col < 0 || col > this.cols - 1;
    }

    updateGridState()
    {
        this.onGridChanged(this);
    }

    bindGridChanged(callback)
    {
        this.onGridChanged = callback;
    }

    get length() { return this.#grid.length; }
}