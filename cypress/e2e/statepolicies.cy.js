
describe('State Policies View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/states-policies')
  })

  it('Should have a page title', () => {
    cy.get('h1').should('contain.text', 'Check state abortion status')
  })
})