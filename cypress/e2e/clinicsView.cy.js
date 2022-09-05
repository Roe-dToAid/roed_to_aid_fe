import { aliasQuery, hasOperationName } from '../utils/graphql-test-utils';

import clinics from '../fixtures/clinics.js';

describe('Clinics View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/clinics');
  });

  afterEach(() => {
    cy.visit('http://localhost:3000/clinics');
  });

  it('should contain a heading', () => {
    cy.dataCy('clinics-view-heading').contains('Find a safe clinic');
  });

  it('should contain an authorized key block', () => {
    cy.dataCy('clinic-key-block-authorized').within(() => {
      cy.dataCy('authorized-header').within(() => {
        cy.dataCy('authorized-h3').contains('Authorized');
      });
      cy.dataCy('authorized-p').contains(
        'Blue clinics are verified safe and provide access to abortion care.'
      );
    });
  });

  it('should contain a my body my rules image', () => {
    cy.dataCy('my-body-image').should('be.visible');
  });

  it('should contain a misinformation key block', () => {
    cy.dataCy('clinic-key-block-misinformation').within(() => {
      cy.dataCy('misinformation-header').within(() => {
        cy.dataCy('misinformation-h3').contains('Misinformation');
      });
      cy.dataCy('misinformation-p').contains(
        'Red clinics are "crisis centers" and are considered unsafe/harmful.'
      );
    });
  });

  it('should contain a search bar to search by state', () => {
    cy.dataCy('search-container').within(() => {
      cy.dataCy('search-mui').contains('search');
    });
  });

  it('should contain a filter button that filters all clinics', () => {
    cy.dataCy('all').click().should('have.class', 'Mui-selected');

    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('authorized-card-container').within(() => {
        cy.dataCy('clinic-card').within(() => {
          cy.dataCy('clinic-name').contains();
        });
      });
    });
  });

  it('should contain a filter button that filters cups', () => {
    cy.dataCy('cups').click().should('have.class', 'Mui-selected');

    cy.dataCy('explore-container').within(() => {
      cy.dataCy('card-link').should('have.attr', 'href', '/explore/cuqu');
    });
  });

  it('should contain a filter button that filters wands', () => {
    cy.dataCy('wands').click().should('have.class', 'Mui-selected');

    cy.dataCy('explore-container').within(() => {
      cy.dataCy('card-link').should('have.attr', 'href', '/explore/wapa');
    });
  });
  it('should contain a filter button that filters wands', () => {
    cy.dataCy('wands').click().should('have.class', 'Mui-selected');

    cy.dataCy('explore-container').within(() => {
      cy.dataCy('card-link').should('have.attr', 'href', '/explore/wapa');
    });
  });
});
