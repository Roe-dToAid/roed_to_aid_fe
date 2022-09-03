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

  it("Should display an image of a diverse group of people and a written introduction to the application", () => {
    cy.dataCy("group-image").should("be.visible");
    cy.dataCy("introduction-text").should("be.visible");
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
