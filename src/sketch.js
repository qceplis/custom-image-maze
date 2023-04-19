import { sketch } from 'p5js-wrapper';
import { state, Mode } from "@/state";

import { GridController } from '@/controllers/GridController';
import { GridView } from '@/views/GridView'
import { Grid } from '@/models/grid'

import { DFS } from '@/dfs'
import { coordsToIndices } from '@/views/CellView'

let grid;
let dfs;

sketch.setup = function()
{
  let width = 800, height = 600;

  createCanvas(width, height);
  frameRate(10);

  grid = new Grid(10, 15);
  let gridView = new GridView();
  let gridController = new GridController(grid, gridView);
  dfs = new DFS(grid);

  dfs.fastLoop()

  // dfs.fastLoop();
}

sketch.draw = function()
{
  // if (state == Mode.Maze) 
  // {
  //   dfs.update();
  // }
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

