describe('Testing on UI', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
  });

  // it('Example of click', () => {
  //   cy.contains('Add/Remove Elements').click();
  //   cy.get('button').click();
  //   cy.contains('Delete').click();
  // });

  // it('Example of type', () => {
  //   cy.contains('Form Authentication').click();
  //   cy.get('#username').type('tomsmith');
  //   cy.get('#password').type('SuperSecretPassword!');
  //   cy.get('.radius').click();
  // });

  // it('Example of checkboxes', () => {
  //   cy.contains('Checkboxes').click();
  //   cy.get('input[type="checkbox"]').check();
  //   cy.get('input[type="checkbox"]').uncheck();
  //   cy.get('#checkboxes > :nth-child(1)').check();
  // });

  /* it('Choose a dropdown', () => {
    cy.contains('Dropdown').click();
    // cy.get('#dropdown').select('Option 2');
    cy.get('#dropdown').select(2); // --> Index works
  }); */

  /* it('Example of CLEAR', () => {
    cy.contains('Form Authentication').click();
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!').clear();
    cy.get('.radius').click();
  }); */

  /*   it('Hover on element', () => {
    cy.contains('Hovers').click();
    cy.get('#content > div > div:nth-child(3) > div > a').click({
      // Allows to click on hidden elements
      force: true,
    });
    // cy.get('.figure').first().trigger('mouseover');
    // cy.get('.figcaption > h5').contains('name: user1');
  }); */

  it('Right click', () => {
    cy.contains('Context Menu').click();
    cy.get('#hot-spot').rightclick();
    //Another way
    // cy.get('#hot-spot').invoke('trigger', 'contextmenu');
    cy.on('window:alert', (alert) => {
      expect(alert).to.equal('You selected a context menu');
    });
  });
});
