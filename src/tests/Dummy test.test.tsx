import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Dummy test for testing CI", () => {
  render(<App />);

  test("Dummy button is present", () => {
    const loginButton = screen.getByRole("button", { name: "Dummy" });

    expect(loginButton).toBeInTheDocument();
  });
});
