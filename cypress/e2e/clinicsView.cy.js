describe('Clinics View', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      `https://roed-to-aide-be.herokuapp.com/graphql?api_key=${process.env.REACT_APP_API_KEY}`,
      {
        fixture: 'clinics',
      }
    );
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

  it('should contain a filter button that filters pentacles', () => {
    cy.dataCy('pentacles').click().should('have.class', 'Mui-selected');

    cy.dataCy('explore-container').within(() => {
      cy.dataCy('card-link').should('have.attr', 'href', '/explore/peki');
    });
  });

  it('should contain a filter button that filters swords', () => {
    cy.dataCy('swords').click().should('have.class', 'Mui-selected');

    cy.dataCy('explore-container').within(() => {
      cy.dataCy('card-link').should('have.attr', 'href', '/explore/swkn');
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
});
