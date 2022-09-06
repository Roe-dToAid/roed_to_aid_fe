describe("About", () => {
  beforeEach(() => {;
    cy.visit("http://localhost:3000/about");
  })

  it("Should display the Nav Bar's logo and 3 tabs", () => {
    cy.dataCy("logo-img").should("be.visible");
    cy.dataCy("about-tab").should("be.visible");
    cy.dataCy("find-clinic-tab").should("be.visible");
    cy.dataCy("state-tab").should("be.visible");
  })

  it("Should display the Footer's logo and team member names", () => {
    cy.dataCy("fe-team").should("be.visible").contains("FrontEnd Team");
    cy.dataCy("be-team").should("be.visible").contains("BackEnd Team");
    cy.dataCy("git-hub-link-rachel").should("be.visible").contains("Rachel Allen");
    cy.dataCy("git-hub-link-catlyn").should("be.visible").contains("Catlyn Bowles");
    cy.dataCy("git-hub-link-irmak").should("be.visible").contains("Irmak Erdem");
    cy.dataCy("git-hub-link-lidia").should("be.visible").contains("Lidia Karpinski");
    cy.dataCy("git-hub-link-casey").should("be.visible").contains("Casey Fazio");
    cy.dataCy("git-hub-link-wesley").should("be.visible").contains("Wesley Garcia");
    cy.dataCy("git-hub-link-bryce").should("be.visible").contains("Bryce Wein");
  })

  it("Should display the About page and the mission", () => {
    cy.dataCy("about-roed").contains("Roe'dtoAid");
    cy.dataCy("mission-title").contains("Our Mission");
    cy.dataCy("mission-statement").contains("Our mission is to make abortion clinics information accessible to everyone in the US.");
    cy.dataCy("yes-illustration").should("be.visible");
  })

  it("Should display the inclusivity message", () => {
    cy.dataCy("inclusivity-title").contains("Inclusivity Counts");
    cy.dataCy("inclusivity-statement").contains("Abortion affects everyone. Regardless of your income, gender, sexual orientation, race, and other characteristics, we all must stay informed about current laws. Abortion is essential.");
    cy.dataCy("flower-illustration").should("be.visible");
  })

  it("Should display the team members' photos", () => {
    cy.dataCy("meet").contains("Meet the Team");
    cy.dataCy("rachel").should("be.visible");
    cy.dataCy("catlyn").should("be.visible");
    cy.dataCy("irmak").should("be.visible");
    cy.dataCy("lidia").should("be.visible");
    cy.dataCy("casey").should("be.visible");
    cy.dataCy("wes").should("be.visible");
    cy.dataCy("bryce").should("be.visible");
  })

  it("Should display a note about the latest data updates", () => {
    cy.dataCy("data-statement").should("be.visible").contains("The data on this website was last updated on September 6, 2022.");
    cy.dataCy("data-statement").should("be.visible").contains("For most up to date information, please go here.");
  })

  it("Should be able to go back to the Home page when clicking logo", () => {
    cy.get('.logo-link > .logo-img').click();
		cy.url().should("eq", "http://localhost:3000/");
	})
 })