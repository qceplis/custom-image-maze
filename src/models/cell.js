export class Cell
{
    #row;
    #col;

    visited;
    isCurrent;

    // Walls
    #isTopVisible;
    #isRightVisible;
    #isBottomVisible;
    #isLeftVisible;

    constructor(row, col)
    {
        this.#row = row;
        this.#col = col;

        this.visited = false;
        this.isCurrent = false;

        this.#isTopVisible    = true;
        this.#isRightVisible  = true;
        this.#isBottomVisible = true;
        this.#isLeftVisible   = true;
    }

    debugInfo(message="")
    {
        console.log(message + ": " + this.#row +", "+ this.#col +", "+ this.visited);
    }

    get row() { return this.#row; }
    get col() { return this.#col; }

    // get visisted() { return this.#visited; }
    // set visisted(val) 
    // { 
    //     console.log(typeof(val));
    //     this.#visited = val;
    // }

    get isTopVisible() { return this.#isTopVisible; }
    set isTopVisible(val) 
    {
        this.#isTopVisible = val;
    }

    get isRightVisible() { return this.#isRightVisible; }
    set isRightVisible(val) 
    { 
        this.#isRightVisible = val;
    }

    get isBottomVisible() { return this.#isBottomVisible; }
    set isBottomVisible(val) 
    { 
        this.#isBottomVisible = val;
    }

    get isLeftVisible() { return this.#isLeftVisible; }
    set isLeftVisible(val) 
    { 
        this.#isLeftVisible = val;
    }
}

