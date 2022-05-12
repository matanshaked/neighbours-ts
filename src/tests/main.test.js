import { render, screen } from "@testing-library/react";

import MainView from "../components/main-view/MainView.component";
import { mockOriginalMatrix } from "./testMockData";

describe("checking how many tables were rendered", () => {
  it("should render two", () => {
    render(<MainView originalMatrix={mockOriginalMatrix} />);
    const allTables = screen.getAllByRole("table");
    expect(allTables).toHaveLength(2);
  });
});
