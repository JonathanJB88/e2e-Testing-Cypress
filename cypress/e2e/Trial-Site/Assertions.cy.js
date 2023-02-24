describe('Implicit & Explicit assertions', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
  });

  /*  it('Implicit Assertions', () => {
    // cy.contains('A/B Testing').click()
    // cy.url().should('include', '/abtest')
    // cy.get('h3').should('be.visible')
    cy.contains('Inputs').click();
    cy.get('h3').should('have.text', 'Inputs').and('have.class', ''); //and to continue validating ...
  }); */

  /*  it('Explicit Assertions', () => {
    // cy.contains('A/B Testing').click()
    // cy.url().should('include', '/abtest')
    // cy.get('h3').then(($element) => {
    //   const text = $element.text()
    //   expect(text).to.equal('A/B Test Control')
    // })
    cy.contains('Inputs').click();
    cy.get('h3');
    expect('Inputs').to.equals('Inputs');
  }); */

  it('Wait to resolve the promises', () => {
    let waited = false;
    const waitOneSecond = () => {
      //Returns a promise that is resolved 1 second later
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          //set waited in true
          waited = true;
          //resolve the promise with the string 'foo'
          resolve('foo');
        }, 1000);
      });
    };
    cy.wrap(null).then(() => {
      //Returns a promise to cy.then that
      //is waited to be resolved.
      return waitOneSecond().then((str) => {
        expect(waited).to.be.true;
        expect(str).to.equal('foo');
      });
    });
  });
});
