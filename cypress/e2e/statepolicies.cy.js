import policies from '../fixtures/policies.json';
import legalpolicies from '../fixtures/legalpolicies.json';
import illegalpolicies from '../fixtures/illegalpolicies.json';
import atriskpolicies from '../fixtures/atriskpolicies.json';

describe('State Policies View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/states-policies');
    cy.interceptGQL(
      'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881',
      'GetPolicies',
      policies
    ).as('GetPolicies');
    cy.wait("@GetPolicies")
    cy.visit('http://localhost:3000/states-policies');
  });

  afterEach(() => {
    cy.visit('http://localhost:3000/states-policies');
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
    cy.dataCy('fight-img').should('be.visible')
    cy.dataCy('fists-img').should('be.visible')
  })

  it('Should upload all policy cards on page load', () => {
    cy.dataCy('info-strip').should('have.length', 3)
  })

  it('Should display policys cards in alphabetical order with the state name and legal description', () => {
    cy.dataCy('info-strip').children().first().contains('Alabama')
    cy.dataCy('info-strip').children().next().contains('Abortion is completely banned in Alabama')

    cy.dataCy('info-strip').children().last().contains('Arizona')
    cy.dataCy('info-strip').children().next().contains('Yes. Abortion is legal in Arizona.')
  })

  it('Should should allow the user to sort by legal state status', () => {
    cy.dataCy('legal').click({ timeout: 10000 })
    cy.visit('http://localhost:3000/states-policies');
    cy.interceptGQL(
      'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881',
      'GetPolicies',
      legalpolicies
    ).as('GetPolicies');
    cy.wait("@GetPolicies")
    cy.visit('http://localhost:3000/states-policies');
    cy.dataCy('info-strip').should('have.length', 1).should('contain.text', 'Alaska')
  })

  it('Should should allow the user to sort by illegal state status', () => {
    cy.dataCy('illegal').click({ timeout: 10000 })
    cy.visit('http://localhost:3000/states-policies');
    cy.interceptGQL(
      'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881',
      'GetPolicies',
      illegalpolicies
    ).as('GetPolicies');
    cy.wait("@GetPolicies")
    cy.visit('http://localhost:3000/states-policies');
    cy.dataCy('info-strip').should('have.length', 1).should('contain.text', 'Alabama')
  })

  it('Should should allow the user to sort by at risk state status', () => {
    cy.dataCy('legal').click({ timeout: 10000 })
    cy.visit('http://localhost:3000/states-policies');
    cy.interceptGQL(
      'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881',
      'GetPolicies',
      atriskpolicies
    ).as('GetPolicies');
    cy.wait("@GetPolicies")
    cy.visit('http://localhost:3000/states-policies');
    cy.dataCy('info-strip').should('have.length', 1).should('contain.text', 'Arizona')
  })

  it('Should should allow the user to search with the search bar', () => {
    cy.get('.search').type('Alaska')
    cy.dataCy('info-strip').should('have.length', 1)
    cy.get('.search').clear()
  })

  it('Should display an error message if a network request fails at a status code 500.', () => {
    cy.intercept('POST', 'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881', {
      statusCode: 500,
      body: {
        error: "Cypress forced 500"
      }
    })
    cy.visit('http://localhost:3000/states-policies')
    cy.dataCy('error').should('have.text', 'Something went wrong.Click the Roe\'dToAid logo above to return home.')
    cy.dataCy('error-image').should('be.visible')
  })

  it('Should display an error message if a network request fails with a status code of 400.', () => {
    cy.intercept('POST', 'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881', {
      statusCode: 400,
      body: {
        error: "Cypress forced 400"
      }
    })
    cy.visit('http://localhost:3000/states-policies')
    cy.dataCy('error').should('have.text', 'Something went wrong.Click the Roe\'dToAid logo above to return home.')
    cy.dataCy('error-image').should('be.visible')
  })
})