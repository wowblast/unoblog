import About from "@/app/about/page";

describe("About Component Test", () => {
  beforeEach(() => {
    // Visit the About page component before each test
    cy.mount(<About />);
  });

  it("renders the About component with the correct title", () => {
    // Check if the About component title exists and has the correct text
    cy.get('[data-testId="aboutTitle"]')
      .should("exist")
      .and("contain.text", "About EpicEnigma Echo");
  });

  it("renders the main content of the About component", () => {
    // Check if the main content of the About component exists
    cy.get('[data-testId="aboutContent"]').should("exist");

    // Check if specific paragraphs exist

    // Check if the quote exists
    cy.get('[data-testId="aboutQuote"]')
      .should("exist")
      .and(
        "contain.text",
        "In the ever-evolving landscape of technology and entertainment, EpicEnigma Echo is dedicated to creating a culture where users come first. We believe in empowering and supporting our community, and we prioritize the success and satisfaction of our users"
      );

    // You can add more assertions based on your component structure
  });
});
