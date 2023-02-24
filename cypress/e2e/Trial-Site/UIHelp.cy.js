describe('Testing UI', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
  });

  it('Examples of waitings', () => {
    cy.wait(1000);
    cy.contains('Challenging DOM').click();
  });

  // it('New tab', () => {
  //   cy.contains('Multiple Windows').click();
  //   cy.contains('Click Here').invoke('removeAttr', 'target').click();
  //   cy.contains('New Window').should('have.text', 'New Window');
  // });

  // it('Shadow DOM', () => {
  //   cy.contains('Shadow DOM').click();
  //   cy.get('ul > :nth-child(2)').shadow().should('have.text', 'In a list!');
  // });

  // it('First and last element', () => {
  //   cy.contains('Dynamic Content').click();
  //   cy.get('img').should('be.visible'); // Validate all the img elements
  //   cy.get('img').should('have.length', 3);
  //   cy.get('img').first().should('be.visible'); // Validate the first one
  //   cy.get('img').last().should('be.visible'); // Validate the last one
  //   cy.get('img').eq(2).should('be.visible'); // Validate the position 2 on the list of img elements.
  // });

  // it('Parents to children', () => {
  //   cy.contains('Dynamic Content').click();
  //   cy.get(':nth-child(4) > .large-2 > img').parent();
  //   cy.get('.example > :nth-child(7)').children();
  // });

  // it('Invoke', () => {
  //   cy.contains('Dynamic Content')
  //     .should('be.hidden')
  //     .invoke('show')
  //     .should('be.visible');
  // });
});
