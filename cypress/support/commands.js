// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'iframe',
  { prevSubject: 'element' },
  ($iframe, selector) => {
    Cypress.log({
      name: 'iframe',
      consoleProps() {
        return {
          iframe: $iframe,
          selector,
        };
      },
    });
    return new Cypress.Promise((resolve) => {
      resolve($iframe.contents().find(selector));
    });
  }
);

Cypress.Commands.add('login', () => {
  cy.visit('https://the-internet.herokuapp.com');
  cy.request({
    method: 'POST',
    url: '/authenticate',
    form: true,
    body: {
      username: 'tomsmith',
      password: 'SuperSecretPassword!',
    },
  });
  cy.getCookie('rack.session').should('exist');
  cy.getCookie('rack.session').should('have.property', 'value');
  cy.visit('https://the-internet.herokuapp.com/secure');
});
