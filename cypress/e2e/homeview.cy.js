describe("About", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Should display the Nav Bar's logo and 3 tabs", () => {
    cy.dataCy("logo-img").should("be.visible");
    cy.dataCy("about-tab").should("be.visible");
    cy.dataCy("find-clinic-tab").should("be.visible");
    cy.dataCy("state-tab").should("be.visible");
  });

  it("Should display Roe'dToAid logo with image of a diverse group of people and a written introduction to the application", () => {
    cy.dataCy("group-image").should("be.visible");
    cy.dataCy("app-title").contains("Welcome to Roe'dToAid");
    cy.dataCy("app-phrase").contains("A safe space to find a safe place.");
    cy.dataCy("first-paragraph").contains(
      "After the U.S. Supreme Court officially reversed Roe v Wade in June of 2022, millions lost a fundamental constitutional protection, the right to abortion."
    );
    cy.dataCy("second-paragraph").contains(
      "  Roe’dToAid was created to bring awareness and expand access to safe,authorized clinics that provide necessary healthcare to all birthers.This application compiles current clinic information by state and clearly defines authorized clinics and distinguishes them from misinformation centers. Users can learn about current state policies as well as available resources in their state."
    );
  });

  it("Should display an explanation of 'authorized clinics' and 'misinformation centers'", () => {
    cy.dataCy("authorized-clinic-explanation").should("be.visible");
    cy.dataCy("misinformation-center-explanation").should("be.visible");
  });

  it("Should display 3 preview boxes containing explanation of each view's contents", () => {
    cy.dataCy("preview-block-container").should("be.visible");
    cy.dataCy("misinformation-center-explanation").should("be.visible");
  });

  it("Should display the Footer's logo and team member names", () => {
    cy.dataCy("fe-team").should("be.visible").contains("FrontEnd Team");
    cy.dataCy("be-team").should("be.visible").contains("BackEnd Team");
    cy.dataCy("git-hub-link-rachel")
      .should("be.visible")
      .contains("Rachel Allen");
    cy.dataCy("git-hub-link-catlyn")
      .should("be.visible")
      .contains("Catlyn Bowles");
    cy.dataCy("git-hub-link-irmak")
      .should("be.visible")
      .contains("Irmak Erdem");
    cy.dataCy("git-hub-link-lidia")
      .should("be.visible")
      .contains("Lidia Karpinski");
    cy.dataCy("git-hub-link-casey")
      .should("be.visible")
      .contains("Casey Fazio");
    cy.dataCy("git-hub-link-wesley")
      .should("be.visible")
      .contains("Wesley Garcia");
    cy.dataCy("git-hub-link-bryce").should("be.visible").contains("Bryce Wein");
  });
});
