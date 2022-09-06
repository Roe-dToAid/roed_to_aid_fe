import clinics from '../fixtures/clinics.json';

describe('Clinics View', () => {
  beforeEach(() => {
    cy.interceptGQL(
      'https://roed-to-aide-be.herokuapp.com/graphql?api_key=ca912ed1df0d1c0f014ec94e3c731881',
      'GetClinics',
      clinics
    ).as('GetClinics');
  
    cy.visit('http://localhost:3000/clinics');
  });

  afterEach(() => {
    cy.visit('http://localhost:3000/clinics');
  });

  it('should contain a heading', () => {
    cy.dataCy('clinics-view-heading').wait(3000).contains('Find a safe clinic');
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

  it('should contain a disclaimer', () => {
    cy.dataCy('clinics-view-disclaimer').contains("As this is an MVP project, we currently only have results for Indiana, New Mexico, and Texas. Please use one those states when using the search bar.")
  });

  it('should contain a search bar', () => {
    cy.dataCy('search-container').within(() => {
      cy.dataCy('search-mui').contains('search');
      cy.dataCy('search-input').type("New Mexico").should("have.value", "New Mexico");;
    });
  });

  it('should be able to search for state that contains results', () => {
    cy.dataCy('search-container').within(() => {
      cy.dataCy('search-input').type("New Mexico").should("have.value", "New Mexico");;
    });

    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 13);
    });

  });

  it('should be able to search for state that contains results and toggles authorized', () => {
    cy.dataCy('search-container').within(() => {
      cy.dataCy('search-input').type("New Mexico").should("have.value", "New Mexico");;
    });

    cy.dataCy('authorized').click().should('have.class', 'Mui-selected');


    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 8);
    });

  });

  it('should be able to search for state that contains results and toggles resources', () => {
    cy.dataCy('search-container').within(() => {
      cy.dataCy('search-input').type("New Mexico").should("have.value", "New Mexico");;
    });

    cy.dataCy('resources').click().should('have.class', 'Mui-selected');


    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 3);
    });

  });

  it('should be able to search for state that contains results and toggles misinformation', () => {
    cy.dataCy('search-container').within(() => {
      cy.dataCy('search-input').type("New Mexico").should("have.value", "New Mexico");;
    });

    cy.dataCy('misinformation').click().should('have.class', 'Mui-selected');


    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 2);
    });

  });
  

  it('should contain a filter button that filters all clinics', () => {
    cy.dataCy('all').click().should('have.class', 'Mui-selected');

    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 13);
    });
  });

  it('should contain a filter button that filters authorized clinics', () => {
    cy.dataCy('authorized').click().should('have.class', 'Mui-selected');

    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 8);
    });
  });

  it('should contain a filter button that filters resources', () => {
    cy.dataCy('resources').click().should('have.class', 'Mui-selected');

    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 3);
    });
  });
  it('should contain a filter button that filters misinformation centers', () => {
    cy.dataCy('misinformation').click().should('have.class', 'Mui-selected');

    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 2);
    });
  });
  
  it('should contain a filter button that filters misinformation centers', () => {
    cy.dataCy('misinformation').click().should('have.class', 'Mui-selected');

    cy.dataCy('all-clinics-card-container').within(() => {
      cy.dataCy('clinic-card').should("have.length", 2);
    });
  });

  
});
