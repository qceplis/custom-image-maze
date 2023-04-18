import { sketch } from 'p5js-wrapper';
import { state, Mode } from "@/state";
import { GridView } from '@/views/GridView'
import { Grid } from '@/models/grid'
import { DFS } from '@/dfs'
import { coordsToIndices } from '@/views/CellView';
import { GridController } from '@/controllers/GridController';

let width = 800, height = 600;
let grid;
let gridView;
let gridController
let dfs;

sketch.setup = function()
{
  createCanvas(width, height);
  frameRate(10);

  grid = new Grid(10, 15);
  gridView = new GridView();
  gridController = new GridController(grid, gridView);
  dfs = new DFS(grid);

  // dfs.fastLoop();
}

sketch.draw = function()
{
  if (state == Mode.Maze) 
  {
    dfs.update();
  }
}

sketch.mouseDragged = function()
{
  if (state == Mode.Maze || outOfBounds(mouseX, mouseY, width, height)) return;

  const [row, col] = coordsToIndices(mouseX, mouseY);
  grid.at(row, col).showCurrent();

  return false; //prevent default
}

function outOfBounds(mouseX, mouseY, width, height)
{
  return mouseX > width || mouseX < 0 || mouseY > height || mouseY < 0;
}

