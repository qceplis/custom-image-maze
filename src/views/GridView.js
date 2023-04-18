import { CellView } from "@/views/CellView";

export class GridView
{
    #cellView;

    constructor()
    {
        this.#cellView = new CellView();
    }

    show(grid)
    {
        grid.forEach( cell => this.#cellView.show(cell) );
    }
}