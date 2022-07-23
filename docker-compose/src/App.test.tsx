import { describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Simple working test", () => {
  it("the content is visible", () => {
    render(<App />);
    expect(screen.getByText("My Website")).toBeInTheDocument();
  });
});
