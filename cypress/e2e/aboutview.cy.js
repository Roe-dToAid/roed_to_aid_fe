describe("About", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("Should display the Nav Bar's logo and 3 tabs", () => {
    cy.dataCy("logo-img").should("be.visible");
    cy.dataCy("about-tab").should("be.visible");
    cy.dataCy("find-clinic-tab").should("be.visible");
    cy.dataCy("state-tab").should("be.visible");
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

  it("Should display the About page and the mission", () => {
    cy.dataCy("about-roed").contains("Roe'd To Aid");
    cy.dataCy("mission-title").contains("Our Mission");
    cy.dataCy("mission-statement").contains(
      "Our mission is to make abortion clinics information accessible to everyone in the US. The reversal of Roe v. Wade will not reduce abortions; it will limit access to safe abortions and endanger millions of birthers. Roe'd To Aid was created to empower folks by educating on current state policies, exposing misinformation centers, and promoting authorized abortion clinics. Users gain the power to make informed decisions about where they may go to receive necessary healthcare."
    );
    cy.dataCy("yes-illustration").should("be.visible");
  });

  it("Should display the inclusivity message", () => {
    cy.dataCy("inclusivity-title").contains("Inclusivity Counts");
    cy.dataCy("inclusivity-statement").contains(
      "We recognize that restricting access to abortion increases the burden already placed on people with low incomes, young people, folks in rural areas, queer folks, and people of color. We believe that this issue affects everyone, everywhere and intersects the issues of racial, economic, and reproductive justice. Increasing equitable and unrestricted access to information and resources is the core of this ever evolving project."
    );
    cy.dataCy("flower-illustration").should("be.visible");
  });

  it("Should display the team members' photos", () => {
    cy.dataCy("meet").contains("Meet the Team");
    cy.dataCy("rachel").should("be.visible");
    cy.dataCy("catlyn").should("be.visible");
    cy.dataCy("irmak").should("be.visible");
    cy.dataCy("lidia").should("be.visible");
    cy.dataCy("casey").should("be.visible");
    cy.dataCy("wes").should("be.visible");
    cy.dataCy("bryce").should("be.visible");
  });

  it("Should display a note about the latest data updates", () => {
    cy.dataCy("data-statement")
      .should("be.visible")
      .contains(
        "The data on this website was last updated on September 6, 2022."
      );
    cy.dataCy("data-statement")
      .should("be.visible")
      .contains(
        "For abortion seekers hoping to find the latest information we recommend checking out these links below, as well as any of the sites listed in the resources section."
      );
  });

  it("Should be able to go back to the Home page when clicking logo", () => {
    cy.get(".logo-link > .logo-img").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
