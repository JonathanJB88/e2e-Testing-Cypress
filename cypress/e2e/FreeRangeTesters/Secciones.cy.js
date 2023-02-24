const testdata = require('../../fixtures/titulos.json');

describe('The title is the right one for each subpage in Free Range Testers', () => {
  testdata.forEach((testdata) => {
    it(`Validate the title for ${testdata.title}`, () => {
      cy.visit(testdata.link);
      cy.title().should('eq', testdata.title);
    });
  });
});
