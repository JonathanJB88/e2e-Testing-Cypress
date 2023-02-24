class FreeRangeHome {
  //Navigation
  navigateToHome() {
    cy.visit('https://www.freerangetesters.com');
  }
  //Locators
  empezarButton() {
    return cy.get('#comp-krjarw4p > a');
  }
}

export default FreeRangeHome;
