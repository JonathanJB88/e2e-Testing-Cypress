describe('Working with modal screens', () => {
  it('Validate the text of an element inside the iframe', () => {
    cy.visit('https://webdriveruniversity.com/IFrame/index.html');
    cy.get('#frame')
      .iframe('body #button-find-out-more > b')
      .should('include.text', 'Find Out More!');
  });
});
