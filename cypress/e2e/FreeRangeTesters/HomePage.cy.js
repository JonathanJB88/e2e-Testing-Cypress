describe('www.freerangetesters.com home page', () => {
  beforeEach(() => {
    cy.visit('https://www.freerangetesters.com');
  });

  it('should have a title', () => {
    cy.title().should('include', 'Free Range Testers'); //eq or include works
    // cy.get('#comp-l02x1m8d2label').click();
    // cy.xpath('//*[@id="comp-l02x1m8d2label"]').click();
  });

  it('should have 12 buttons "VER CURSO" or "PRONTO!" ', () => {
    cy.xpath('//*[@id="comp-l02x1m8d2label"]').click();
    cy.get('[data-testid="linkElement"] > .M3I7Z2').should('have.length', 12);
  });

  it('The field "Nombre" has the class "KvoMHf has-custom-focus text-input__input"', () => {
    cy.get('#input_comp-l1ed927d').should(
      'have.class',
      'KvoMHf has-custom-focus text-input__input'
    );
  });

  it('There is a link in the navbar, called Blog', () => {
    cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog');
  });

  it('There is a button of "Empezá a aprender!"', () => {
    cy.get('#comp-krjarw4p > a').should('exist');
    // cy.get('#comp-krjarw4p > a').as('BotonEmpezar'); // --> It didn't work
    cy.get('#comp-krjarw4p > a').should('be.visible');
  });

  // it('The element is checked', () => {
  //   cy.get('').should('be.checked');
  // })

  // it('The element is disabled', () => {
  //   cy.get('').should('be.disabled');
  // })
});
