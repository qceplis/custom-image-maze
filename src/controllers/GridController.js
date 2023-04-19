export class GridController
{
    #model;
    #view;

    constructor(model, view)
    {
        this.#model = model;
        this.#view = view;

        this.bindEventCallbacks();

        // show grid on construction
        this.onGridChanged(this.#model);
    }

    bindEventCallbacks()
    {
        this.#model.bindGridChanged((grid) => this.onGridChanged(grid));
    }

    onGridChanged(grid)
    {
        this.#view.show(grid);
    }
}