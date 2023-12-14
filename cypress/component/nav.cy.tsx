// nav.cy.tsx

import Navbar from "@/app/components/navbar/Navbar";

describe("Navbar Component", () => {
  beforeEach(() => {
    cy.mount(<Navbar />);
  });

  it("renders the Navbar with the correct links", () => {
    // Ensure the logo is present and has the correct text
    cy.get("[data-testId=logo]").should("have.text", "EpicEnigma Echo");

    // Ensure Home link is present and navigates to the correct URL
    cy.get("[data-testId=homeLink]").should("have.attr", "href", "/");

    // Ensure About link is present and navigates to the correct URL
    cy.get("[data-testId=aboutLink]").should("have.attr", "href", "/about");
  });

  it('renders the Toggle component', () => {
      
    cy.get('[data-testId=toggleLabel]').should('exist');

  });

  it('renders the AuthLinks component', () => {

    // Add your tests for the AuthLinks component if needed
  });
});