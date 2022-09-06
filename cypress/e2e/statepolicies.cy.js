// describe('State Policies View', () => {
//   beforeEach(() => {
//     cy.visit('http://localhost:3000/states-policies')
//   });

import policies from '../fixtures/policies.json';

describe('State Policies View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/states-policies');
    cy.interceptGQL(
      'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881',
      'GetPolicies',
      policies
    ).as('GetPolicies');
    cy.wait("@GetPolicies")
  });

  it('Should have a page title', () => {
    cy.dataCy('policy-header').contains('Check state abortion status')
  })

  it('Should have a search bar', () => {
    cy.dataCy('search').should('exist')
  })

  it('Should have a legend to search by legality, including an all states button', () => {
    cy.dataCy('legal-key').should('exist')

    cy.dataCy('legal-key').children().should('have.length', 4)
    cy.dataCy('legal-key').children().first().contains('ALL STATES')
    cy.dataCy('legal-key').children().next().contains('LEGAL')
    cy.dataCy('legal-key').children().next().contains('AT RISK')
    cy.dataCy('legal-key').children().next().contains('ILLEGAL')
  })

  it('Should have icons', () => {
    cy.dataCy('fight-img').should('exist')
    cy.dataCy('fists-img').should('exist')
  })

  it.skip('Should upload all policy cards on page load', () => {
    cy.interceptGQL(
      'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881',
      'GetPolicies',
      policies
    ).as('GetPolicies');
    
    cy.dataCy('info-strip').should('have.length', 3)
  })

  it('Should display policys cards in alphabetical order with the state name and legal description', () => {
    cy.dataCy('info-strip').children().first().contains('Alabama')
    cy.dataCy('info-strip').children().next().contains('Abortion is completely banned in Alabama')

    cy.dataCy('info-strip').children().next().contains('Alaska')
    cy.dataCy('info-strip').children().next().contains('Yes. Abortion is legal in Alaska. There is no limit on abortion in Alaska based on how far along in pregnancy you are. To figure out how far along you are in pregnancy, count from the first day of your last period.')
  })

  // NOT WORKING
  it('Should should allow the user to sort by legal status', () => {
    cy.dataCy('legal').click({ timeout: 10000 })
    cy.wait(2000)
    cy.dataCy('info-strip').should('have.length', 28)
  })

  it('Should should allow the user to sort by legal status', () => {
    cy.dataCy('illegal').click({ timeout: 10000 })
    cy.wait(2000)
    cy.dataCy('info-strip').should('have.length', 14)
   })

   it('Should should allow the user to sort by legal status', () => {
    cy.dataCy('at-risk').click({ timeout: 10000 })
    cy.wait(2000)
    cy.dataCy('info-strip').should('have.length', 10)
   })

   it('Should should allow the user to search with the search bar', () => {
    cy.get('.search').type('Alaska')
    cy.dataCy('info-strip').should('have.length', 1)
    cy.get('.search').clear()
   })
})