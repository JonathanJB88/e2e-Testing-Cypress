describe('Static and dynamic tables', () => {
  // it('Assertion on static table', () => {
  //   cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/');
  //   // cy.get('table').find('tr').contains('td', 'Selenium').should('be.visible');
  //   cy.contains('td', 'Ranorex').next().should('have.text', 'Commercial');
  // });

  it('Assertion on dynamic table', () => {
    cy.visit('https://chercher.tech/practice/dynamic-table');
    cy.contains('td', 'facebook.com').prev().find('input').check();
  });
});
