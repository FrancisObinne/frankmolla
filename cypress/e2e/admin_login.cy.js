// cypress/e2e/admin_login.cy.js

// IMPORTANT: Make sure your application is running (e.g., npm run dev) before running this test!

describe("Admin Login E2E Flow", () => {
  // Set up before each test
  beforeEach(() => {
    // Visit the login page (assuming it's the root or '/admin/login')
    cy.visit("/");
  });

  it("should successfully log in a valid admin and navigate to the dashboard", () => {
    // In a real application, you'd use a special test user/password
    const testEmail = "test@admin.com";
    const testPassword = "securepassword";

    // 1. Fill out the email field
    cy.get('input[name="email"]').type(testEmail);

    // 2. Fill out the password field
    cy.get('input[name="password"]').type(testPassword);

    // 3. Click the Sign In button
    cy.get("button").contains("Sign In").click();

    // 4. Assertion: Check for successful navigation (assuming dashboard is at /admin/dashboard)
    cy.url().should("include", "/admin/dashboard");

    // 5. Assertion: Check for the success toast (if it exists)
    // cy.contains('Login successful').should('be.visible');
  });

  it("should show validation errors when submitting an empty form", () => {
    // Click the Sign In button immediately
    cy.get("button").contains("Sign In").click();

    // Assertion: Check that validation messages are visible
    cy.contains("Invalid email address").should("be.visible");
    cy.contains("Password must be at least 6 characters").should("be.visible");
  });
});
