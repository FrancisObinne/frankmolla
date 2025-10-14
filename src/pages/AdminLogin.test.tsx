// src/pages/AdminLogin.test.jsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminLogin from "./AdminLogin"; // Adjust import path

// Mocking essential hooks/libraries to isolate the component
// We mock useToast and useNavigate to prevent errors and side effects
jest.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast: jest.fn() }),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

// Mock the entire Firebase auth module (VERY IMPORTANT)
jest.mock("@/firebase/config", () => ({
  auth: {}, // Mock auth object
  db: {}, // Mock db object
}));
// Mock firebase/auth methods if needed for the full test, but for validation, this is enough.

// Integration Test: Check required field validation
test("displays validation error when submitting empty login form", async () => {
  render(<AdminLogin />);

  // Find the Sign In button
  const signInButton = screen.getByRole("button", { name: /Sign In/i });

  // Click the button without filling any fields
  fireEvent.click(signInButton);

  // Wait for React Hook Form/Zod to run validation and display messages
  await waitFor(() => {
    // Assert that the email validation message appears
    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();

    // Assert that the password validation message appears
    expect(
      screen.getByText(/Password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });
});
