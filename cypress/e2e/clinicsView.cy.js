describe('Clinics View', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      `https://roed-to-aide-be.herokuapp.com/graphql?api_key=${process.env.REACT_APP_API_KEY}`,
      {
        fixture: 'clinicsView',
      }
    );
    cy.visit('http://localhost:3000/clinics');
  });

  afterEach(() => {
    cy.visit('http://localhost:3000/clinics');
  });

  it('should contain a heading', () => {
    cy.dataCy('explore-view-heading').contains('Explore The Deck');
  });

  it('should contain an instruction block', () => {
    cy.dataCy('instruction-block')
      .contains('MAJOR & MINOR ARCANA TAROT CARD MEANINGS')
      .dataCy('instruction-block')
      .contains(
        "Learn what each card of the tarot deck means—the major arcana, the minor arcana, they're all here."
      );
  });

  it('should contain a filter button that filters major arcana', () => {
    cy.dataCy('major').should('have.class', 'Mui-selected');

    cy.dataCy('explore-container').within(() => {
      cy.dataCy('card-link').should('have.attr', 'href', '/explore/ar06');
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