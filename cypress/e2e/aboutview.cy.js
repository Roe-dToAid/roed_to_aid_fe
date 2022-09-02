describe('About', () => {
  beforeEach(() => {;
    cy.visit('http://localhost:3000/about');
  })

  it('The user should see the About page', () => {
    cy.dataCy("about-roed").contains("About Roe'd to Aid")
    cy.dataCy("mission-title").contains("Our Mission")
    cy.dataCy("mission-statement").contains("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
  })

  it('The user should be able to go back to the Home page when clicking logo', () => {
    cy.get('.logo-link > .logo-img').click();
		cy.url().should('eq', 'http://localhost:3000/');
	})
 })