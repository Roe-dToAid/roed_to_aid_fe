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
    cy.dataCy("app-explanation").contains(
      "After the U.S. Supreme Court officially reversed Roe v Wade in June of 2022, millions lost a fundamental constitutional protection, the right to abortion.Roe'dToAid was created to bring awareness and expand access to safe, authorized clinics that provide necessary healthcare to all birthers. This application compiles current clinic information by state and clearly defines authorized clinics and distinguishes them from misinformation centers. Users can learn about current state policies as well as available resources in their state."
    );
  });

  it("Should display an explanation of 'Authorized Clinics' and 'Misinformation Centers'", () => {
    cy.dataCy("authorized-clinic-explanation").should("be.visible");
    cy.dataCy("misinformation-center-explanation").should("be.visible");
  });

  it("Should display 3 preview boxes containing explanation of each views' contents", () => {
    cy.dataCy("preview-block-container").should("be.visible");
  });

  it("Should route you to Clinics view when 'Find a Clinic' button clicked", () => {
    cy.dataCy("find-clinic-button")
      .contains("Find A Clinic")
      .click()
      .url()
      .should("include", "/clinics");
  });

  it("Should route you to Policies view when 'Check State Status' button clicked", () => {
    cy.dataCy("check-status-button")
      .contains("Check State Status")
      .click()
      .url()
      .should("include", "/states-policies");
  });

  it("Should route you to About view when 'Learn More' button clicked", () => {
    cy.dataCy("learn-more-button")
      .contains("Learn More")
      .click()
      .url()
      .should("include", "/about");
  });

  it("Should display H.R. Bellicosa quote", () => {
    cy.dataCy("quote-text").should("be.visible");
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

  it("Should have links to each team member's respective GitHub account", () => {
    cy.dataCy("git-hub-link-rachel")
      .contains("Rachel Allen")
      .should("have.attr", "href", "https://github.com/Rallen13/");
    cy.dataCy("git-hub-link-catlyn")
      .contains("Catlyn Bowles")
      .should("have.attr", "href", "https://github.com/catlynbowles");
    cy.dataCy("git-hub-link-irmak")
      .contains("Irmak Erdem")
      .should("have.attr", "href", "https://github.com/irmakerdem");
    cy.dataCy("git-hub-link-lidia")
      .contains("Lidia Karpinski")
      .should("have.attr", "href", "https://github.com/lkarpins");
    cy.dataCy("git-hub-link-casey")
      .contains("Casey Fazio")
      .should("have.attr", "href", "https://github.com/casefaz");
    cy.dataCy("git-hub-link-wesley")
      .contains("Wesley Garcia")
      .should("have.attr", "href", "https://github.com/wesatt");
    cy.dataCy("git-hub-link-bryce")
      .contains("Bryce Wein")
      .should("have.attr", "href", "https://github.com/bwbolt");
  });
});
