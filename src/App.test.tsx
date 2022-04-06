import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react thanks", () => {
  render(<App />);
  const linkElement = screen.getByText(/thanks/i);
  expect(linkElement).toBeInTheDocument();
});
