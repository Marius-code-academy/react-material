import Counter from "./Counter";
import { render, screen } from "@testing-library/react";
describe("Counter component", () => {
  it("should render without errors", () => {
    render(<Counter startingNumber={5} />);
  });

  it("should render starting number", () => {
    render(<Counter startingNumber={8} />);

    const numberElement = screen.getByTestId("counterText").textContent;

    expect(numberElement).toBe("8");
  });
});
