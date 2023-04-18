export class GridController
{
    #model;
    #view;

    constructor(model, view)
    {
        this.#model = model;
        this.#view = view;

        this.bindEventCallbacks();

        this.onGridChanged(this.#model);
    }

    bindEventCallbacks()
    {
        this.#model.bindGridChanged((grid) => this.onGridChanged(grid));
    }

    onGridChanged(grid)
    {
        background(166);
        this.#view.show(grid);
    }
}