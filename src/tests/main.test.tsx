import { render, screen } from "@testing-library/react";

import { MainView } from "../components/main-view/MainView.component";
import { mockOriginalMatrix } from "./testsMockData";
import {
  getNumberOfLiveNeighbours,
  isUnderpopulation,
  isOvercrowding,
  isReproduction,
} from "../logic/MatrixLogic";

describe("Matrix ruls and logic", () => {
  let numberOfLiveNeighbours: number;
  const row: number = 2;
  const col: number = 2;

  it("Test Number Of Live Neighbours", () => {
    numberOfLiveNeighbours = getNumberOfLiveNeighbours(
      mockOriginalMatrix,
      row,
      col
    );
    expect(numberOfLiveNeighbours).toBe(2);
  });

  it("test is underpopulation", () => {
    const isUnderpopulationRes = isUnderpopulation(
      mockOriginalMatrix,
      row,
      col,
      numberOfLiveNeighbours
    );
    expect(isUnderpopulationRes).toBe(false);
  });

  it("test is overcrowding", () => {
    const isOvercrowdingRes = isOvercrowding(
      mockOriginalMatrix,
      row,
      col,
      numberOfLiveNeighbours
    );
    expect(isOvercrowdingRes).toBe(false);
  });

  it("test is Reproduction", () => {
    const isReproductionRes = isReproduction(
      mockOriginalMatrix,
      row,
      col,
      numberOfLiveNeighbours
    );
    expect(isReproductionRes).toBe(false);
  });
});

describe("Table Component", () => {
  it("should render two tables", () => {
    render(<MainView originalMatrix={mockOriginalMatrix} />);
    const allTables = screen.getAllByRole("table");
    expect(allTables).toHaveLength(2);
  });
});
