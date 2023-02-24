import FreeRangeHome from '../../pages/FreeRangeHome';

const home = new FreeRangeHome();

describe('Example of POM in the website Free Range Testers', () => {
  beforeEach(() => {
    home.navigateToHome();
  });

  it('The button "Empezá a Aprender" exists', () => {
    home.empezarButton().should('exist');
  });
});
