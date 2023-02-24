const credentials = require('../../fixtures/credentials.json');

describe('Examples with fixtures', () => {
  before(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Validate successful Login', () => {
    cy.get('#username').type(credentials.username);
    cy.get('#password').type(credentials.password);
    cy.get('form').submit();
    cy.url().should('include', '/secure');
  });
});
