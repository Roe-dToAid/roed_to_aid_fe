/// <reference types="cypress" />

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('interceptGQL', (url, operation, data, alias) => {
  // Retrieve any previously registered interceptions.
  const previous = Cypress.config('interceptions');
  const alreadyRegistered = url in previous;

  const next = {
    ...(previous[url] || {}),
    [operation]: { alias, data },
  };

  // Merge in the new interception.
  Cypress.config('interceptions', {
    ...previous,
    [url]: next,
  });

  // No need to register handler more than once per URL. Operation data is
  // dynamically chosen within the handler.
  if (alreadyRegistered) {
    return;
  }

  cy.intercept('POST', url, (req) => {
    const interceptions = Cypress.config('interceptions');
    const match = interceptions[url]?.[req.body.operationName];

    if (match) {
      req.alias = match.alias;
      req.reply({ body: match.data });
    }
  });
});
