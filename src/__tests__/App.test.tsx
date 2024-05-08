import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders title", () => {
    //arrange
    const { getByText } = render(<App />);
    const title = getByText("Vite + React");

    //assert
    expect(title).toBeVisible();
  });
});
