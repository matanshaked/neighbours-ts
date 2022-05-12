import { useEffect, useState } from "react";

import Table from "../table/Table.component";
import Spinner from "../spinner/Spinner.component";
import { Matrix } from "../../DataStructures";

import "./MainView.style.scss";

const MainView = ({ originalMatrix }: { originalMatrix: Matrix }) => {
  const [isTickDone, setIsTickDone] = useState(false);
  const [newMatrix, setNewMatrix] = useState<Matrix>();

  const checkNumberOfLiveNeighbours = (
    matrix: Matrix,
    row: number,
    col: number
  ) => {
    let liveNeighboursCount = 0;
    const neighboursArr = new Array(8);

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

  const isUnderpopulation = (
    matrix: Matrix,
    row: number,
    col: number,
    numOfLiveNeighbours: number
  ) => {
    const minLiveNeighboursToLive = 2;
    return !!(
      matrix[row][col] && minLiveNeighboursToLive > numOfLiveNeighbours
    );
  };

  const isOvercrowding = (
    matrix: Matrix,
    row: number,
    col: number,
    numOfLiveNeighbours: number
  ) => {
    const maxLiveNeighboursToLive = 3;
    return !!(
      matrix[row][col] && numOfLiveNeighbours > maxLiveNeighboursToLive
    );
  };

  const isReproduction = (
    matrix: Matrix,
    row: number,
    col: number,
    numOfLiveNeighbours: number
  ) => {
    const liveNeighboursToBecomeLive = 3;
    return !!(
      !matrix[row][col] && numOfLiveNeighbours === liveNeighboursToBecomeLive
    );
  };

  useEffect(() => {
    const tick = (matrix: Matrix) => {
      //create new empty Matrix
      const tempMatrix = new Array(matrix.length);
      for (let j = 0; j < matrix.length; j++) {
        tempMatrix[j] = Array.from({ length: matrix.length }, () => 0);
      }

      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          //set original state first (also for next generation)
          tempMatrix[row][col] = matrix[row][col];
          //get number of live neighbours
          const numOfLiveNeighbours = checkNumberOfLiveNeighbours(
            matrix,
            row,
            col
          );
          //check for underpopulation
          if (isUnderpopulation(matrix, row, col, numOfLiveNeighbours)) {
            tempMatrix[row][col] = 0;
          }

          //check for overcrowded
          if (isOvercrowding(matrix, row, col, numOfLiveNeighbours)) {
            tempMatrix[row][col] = 0;
          }
          //check for reproduction
          if (isReproduction(matrix, row, col, numOfLiveNeighbours)) {
            tempMatrix[row][col] = 1;
          }
        }
      }

      setNewMatrix(tempMatrix);
      setIsTickDone(true);
    };

    tick(originalMatrix);
  }, [originalMatrix]);

  return (
    <div className="container">
      <h1 className="header">Original Matrix:</h1>
      <Table matrix={originalMatrix} />
      <h1 className="header">After Matrix ticks:</h1>
      {!isTickDone ? <Spinner /> : newMatrix && <Table matrix={newMatrix} />}
    </div>
  );
};

export default MainView;
