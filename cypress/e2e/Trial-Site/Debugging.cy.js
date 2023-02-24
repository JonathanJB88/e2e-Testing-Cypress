describe('Utils for debugging with Cypress', () => {
  // it('Example of cy.log', () => {
  //   cy.visit('https://the-internet.herokuapp.com/login');
  //   cy.log('write the username');
  //   cy.get('#username').type('tomsmith');
  //   cy.log('write the password');
  //   cy.get('#password').type('SuperSecretPassword!');
  //   cy.log('click on the login button');
  //   cy.get('form').contains('Login').click();
  //   cy.url().should('contain', '/secure');
  // });

  // it('Example of cy.pause', () => {
  //   cy.visit('https://the-internet.herokuapp.com/login');
  //   cy.get('#username').type('tomsmith').pause();
  //   cy.get('#password').pause().type('SuperSecretPassword!');
  //   cy.get('form').contains('Login').click();
  //   cy.url().should('contain', '/secure').pause();
  //   // cy.pause();
  // });

  it('Example of cy.debug', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').debug().type('SuperSecretPassword!');
    cy.get('form').contains('Login').click();
    cy.url().should('contain', '/secure');
  });
});
