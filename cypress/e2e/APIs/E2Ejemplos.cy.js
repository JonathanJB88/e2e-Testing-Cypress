describe('Log in - Basic Auth & Auth with forms', () => {
  // beforeEach(() => {
  //   cy.task('db:teardown');
  //   cy.task('db:seeding');
  // });

  it('No logged', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth');
    cy.get('p').should('include.text', 'Congratulations');
  });

  it('Log in using auth of Cypress', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
        username: 'admin',
        password: 'admin',
      },
    });
    cy.get('p').should('include.text', 'Congratulations');
  });

  it('Log in with credentials on the url', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.get('p').should('include.text', 'Congratulations');
  });

  it('Log in with form, using a request of type POST', () => {
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
    cy.get('.subheader').should('include.text', 'Welcome to the Secure Area');
  });

  it('The same as before but with a created command', () => {
    cy.login();
    cy.get('.subheader').should('include.text', 'Welcome to the Secure Area');
  });
});
