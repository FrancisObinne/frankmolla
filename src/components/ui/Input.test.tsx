// src/components/ui/Input.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "./input"; // Adjust the import path as needed

// Unit Test: Does the input render correctly with basic props?
test("renders with the correct placeholder and type", () => {
  render(
    <Input
      placeholder="Test Placeholder"
      type="password"
      data-testid="test-input"
    />
  );

  const inputElement = screen.getByTestId("test-input");

  // Assertion 1: Check if the input element is in the DOM
  expect(inputElement).toBeInTheDocument();

  // Assertion 2: Check for the correct placeholder text
  expect(inputElement).toHaveAttribute("placeholder", "Test Placeholder");

  // Assertion 3: Check for the correct HTML type attribute
  expect(inputElement).toHaveAttribute("type", "password");
});
