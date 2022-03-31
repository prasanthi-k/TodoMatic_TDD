import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("Basic rendering of Todomatic", () => {
  it("Should render todomatic heading", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("todo-heading")).toHaveTextContent("TodoMatic");
  });
});
