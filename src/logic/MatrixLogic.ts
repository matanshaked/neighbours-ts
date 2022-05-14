import { Matrix } from "../DataStructures";

const minLiveNeighboursToLive: number = 2;
const liveNeighboursToBecomeLive: number = 3;
const maxLiveNeighboursToLive: number = 3;

export const getNumberOfLiveNeighbours = (
  matrix: Matrix,
  row: number,
  col: number
): number => {
  let liveNeighboursCount: number = 0;
  const neighboursArr: number[] = new Array(8);

  neighboursArr[0] = matrix[row + 1]?.[col - 1];
  neighboursArr[1] = matrix[row]?.[col - 1];
  neighboursArr[2] = matrix[row - 1]?.[col - 1];
  neighboursArr[3] = matrix[row - 1]?.[col];
  neighboursArr[4] = matrix[row - 1]?.[col + 1];
  neighboursArr[5] = matrix[row]?.[col + 1];
  neighboursArr[6] = matrix[row + 1]?.[col + 1];
  neighboursArr[7] = matrix[row + 1]?.[col];

  for (const neighbour of neighboursArr) {
    if (neighbour) {
      liveNeighboursCount = liveNeighboursCount + 1;
    }
  }

  return liveNeighboursCount;
};

export const isUnderpopulation = (
  matrix: Matrix,
  row: number,
  col: number,
  numOfLiveNeighbours: number
): boolean => {
  return !!(matrix[row][col] && numOfLiveNeighbours < minLiveNeighboursToLive);
};

export const isOvercrowding = (
  matrix: Matrix,
  row: number,
  col: number,
  numOfLiveNeighbours: number
): boolean => {
  return !!(matrix[row][col] && numOfLiveNeighbours > maxLiveNeighboursToLive);
};

export const isReproduction = (
  matrix: Matrix,
  row: number,
  col: number,
  numOfLiveNeighbours: number
): boolean => {
  return !!(
    !matrix[row][col] && numOfLiveNeighbours === liveNeighboursToBecomeLive
  );
};
