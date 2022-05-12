import { render, screen } from "@testing-library/react";

import { MainView } from "../components/main-view/MainView.component";
import { mockOriginalMatrix, mockTargetMatrix } from "./testMockData";

describe("Table Component", () => {
  it("should render two tables", () => {
    render(<MainView originalMatrix={mockOriginalMatrix} />);
    const allTables = screen.getAllByRole("table");
    expect(allTables).toHaveLength(2);
  });

  it("should render table per ruls (logic test)", () => {
    render(<MainView originalMatrix={mockOriginalMatrix} />);

    const tbody = screen.getByTestId("results target table");
    const stringObj = tbody.outerHTML;

    expect(stringObj).toBe(mockTargetMatrix);
  });
});
