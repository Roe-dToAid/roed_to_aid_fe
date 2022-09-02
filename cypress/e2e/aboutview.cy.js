describe("About", () => {
  beforeEach(() => {;
    cy.visit("http://localhost:3000/about");
  })

  it("Should display the About page and the mission", () => {
    cy.dataCy("about-roed").contains("About Roe'd to Aid");
    cy.dataCy("mission-title").contains("Our Mission");
    cy.dataCy("mission-statement").contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    cy.dataCy("yes-illustration").should("be.visible");
  })

  it("Should display the inclusivity message", () => {
    cy.dataCy("inclusivity-title").contains("Inclusivity Counts");
    cy.dataCy("inclusivity-statement").contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    cy.dataCy("flower-illustration").should("be.visible");
  })

  it("Should display the team members", () => {
    cy.dataCy("meet").contains("Meet the Team");
    cy.dataCy("rachel").should("be.visible");
    cy.dataCy("catlyn").should("be.visible");
    cy.dataCy("irmak").should("be.visible");
    cy.dataCy("lidia").should("be.visible");
    cy.dataCy("casey").should("be.visible");
    cy.dataCy("wes").should("be.visible");
    cy.dataCy("bryce").should("be.visible");
  })

  it("Should be able to go back to the Home page when clicking logo", () => {
    cy.dataCy("logo-img").click();
		cy.url().should("eq", "http://localhost:3000/");
	})
 })