describe('Sessions & Cookies', () => {
  /* it('No session saved', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    // cy.get('form').contains('Login').click();
    cy.get('form').submit();
    cy.url().should('include', '/secure');
  }); */

  /*  it('With saved session', () => {
    cy.session('Tom', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      // cy.get('form').contains('Login').click();
      cy.get('form').submit();
      cy.url().should('include', '/secure');
    });
  }); */

  /* it('Validate Cookies', () => {
    cy.session('Tom', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      // cy.get('form').contains('Login').click();
      cy.get('form').submit();
      cy.url().should('include', '/secure');
      cy.getCookies()
        .should('have.length', 6)
        .then((cookies) => {
          const cookie = cookies[0];
          expect(cookie.name).to.equal('optimizelyPendingLogEvents');
          expect(cookie.value).to.have.length(493);
        });
    });
    cy.clearCookies();
    cy.getCookies().should('have.length', 0);
  }); */

  /*   it('Validate Cookie', () => {
    cy.session('Tom', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      // cy.get('form').contains('Login').click();
      cy.get('form').submit();
      cy.url().should('include', '/secure');
      cy.getCookie('optimizelyPendingLogEvents').should('exist');
      cy.getCookie('optimizelyPendingLogEvents').should(
        'have.property',
        'value'
      );
      cy.getCookie('optimizelyPendingLogEvents')
        .should('have.property', 'value')
        .and('have.length', 493);
    });
    cy.clearCookie('optimizelyPendingLogEvents');
  }); */

  it('Set cookie', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    // cy.get('form').contains('Login').click();
    cy.get('form').submit();
    cy.url().should('include', '/secure');
    cy.setCookie('MyCookie', 'JoniCookie');
    cy.getCookie('MyCookie').should('have.property', 'value', 'JoniCookie');
  });
});
