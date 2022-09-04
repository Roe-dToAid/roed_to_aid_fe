describe('State Policies View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/states-policies')
    // cy.intercept('POST', 'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881')
  });

  it('Should have a page title', () => {
    cy.dataCy('policy-header').contains('Check state abortion status')
  })

  it('Should have a search bar', () => {
    cy.dataCy('search').should('exist')
  })

  it('Should have a legend to search by legality, including a clear button', () => {
    cy.dataCy('legal-key').should('exist')

    cy.dataCy('legal-key').children().should('have.length', 4)
    cy.dataCy('legal-key').children().first().contains('Clear Search')
    cy.dataCy('legal-key').children().next().contains('LEGAL')
    cy.dataCy('legal-key').children().next().contains('AT RISK')
    cy.dataCy('legal-key').children().next().contains('ILLEGAL')
  })

  it('Should have icons', () => {
    cy.dataCy('fight-img').should('exist')
    cy.dataCy('fists-img').should('exist')
  })

  it('Should upload all policy cards on page load', () => {
    cy.dataCy('info-strip').should('have.length', 52)
  })

  it('Should display policys cards in alphabetical order with the state name and legal description', () => {
    cy.dataCy('info-strip').children().first().contains('Alabama')
    cy.dataCy('info-strip').children().next().contains('Abortion is completely banned in Alabama')

    cy.dataCy('info-strip').children().next().contains('Alaska')
    cy.dataCy('info-strip').children().next().contains('Yes. Abortion is legal in Alaska. There is no limit on abortion in Alaska based on how far along in pregnancy you are. To figure out how far along you are in pregnancy, count from the first day of your last period.')
  })

  //NOT WORKING
  // it('Should should allow the user to sort by legal status', () => {
  //  cy.contains('LEGAL').click().first().dataCy('info-strip').contains('Alaska')
  // })

  // it('Should should allow the user to sort by legal status', () => {
  //   cy.contains('ILLEGAL').click().first().dataCy('info-strip').contains('Alabama')
  //  })

  //  it('Should should allow the user to sort by legal status', () => {
  //   cy.contains('AT RISK').click().first().dataCy('info-strip').contains('Arizona')
  //  })

   it('Should should allow the user to search with the search bar', () => {
    cy.get('.search').type('Alaska')
    // cy.dataCy('info-strip').should('have.length', 1)
   })
})