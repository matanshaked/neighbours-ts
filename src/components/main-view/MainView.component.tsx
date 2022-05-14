import { useEffect, useState } from "react";

import { Table } from "../table/Table.component";
import Spinner from "../spinner/Spinner.component";
import { Matrix } from "../../DataStructures";
import {
  getNumberOfLiveNeighbours,
  isUnderpopulation,
  isOvercrowding,
  isReproduction,
} from "../../logic/MatrixLogic";

import "./MainView.style.scss";

export const MainView = ({
  originalMatrix,
}: {
  originalMatrix: Matrix;
}): JSX.Element => {
  const [isTickDone, setIsTickDone] = useState<boolean>(false);
  const [newMatrix, setNewMatrix] = useState<Matrix>();

  useEffect(() => {
    const tick = (matrix: Matrix) => {
      //create new empty Matrix
      const newMatrixInstance: Matrix = new Array(matrix.length);
      for (let i = 0; i < matrix.length; i++) {
        newMatrixInstance[i] = Array.from({ length: matrix.length }, () => 0);
      }

      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          //set original state first (also for next generation)
          newMatrixInstance[row][col] = matrix[row][col];
          //get number of live neighbours
          const numOfLiveNeighbours: number = getNumberOfLiveNeighbours(
            matrix,
            row,
            col
          );
          //check for underpopulation
          if (isUnderpopulation(matrix, row, col, numOfLiveNeighbours)) {
            newMatrixInstance[row][col] = 0;
          }

          //check for overcrowded
          if (isOvercrowding(matrix, row, col, numOfLiveNeighbours)) {
            newMatrixInstance[row][col] = 0;
          }
          //check for reproduction
          if (isReproduction(matrix, row, col, numOfLiveNeighbours)) {
            newMatrixInstance[row][col] = 1;
          }
        }
      }

      setNewMatrix(newMatrixInstance);
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
