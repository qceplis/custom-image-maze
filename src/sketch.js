import { sketch } from 'p5js-wrapper';
import { state, Mode } from "@/state";
import { Grid } from '@/grid'
import { DFS } from '@/dfs'
import { coordsToIndices } from '@/cell';

let width = 800, height = 600;
let grid;
let dfs;

sketch.setup = function()
{
  createCanvas(width, height);
  frameRate(10);

  grid = new Grid(width, height);
  dfs = new DFS(grid);

  // dfs.fastLoop();
}

sketch.draw = function()
{
  if (state == Mode.Maze) 
  {
    background(166);
    dfs.update();
  }

  grid.show();
}

sketch.mouseDragged = function()
{
  if (state == Mode.Maze || (mouseX > width || mouseX < 0 || mouseY > height || mouseY < 0)) return;

  const [row, col] = coordsToIndices(mouseX, mouseY);
  grid.at(row, col).showCurrent();

  return false; //prevent default
}

