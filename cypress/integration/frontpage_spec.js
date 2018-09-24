
const BASE_URL = 'http://localhost:3000';

describe('Frontpage', () => {
  it('Opens up', () => {
    cy.visit(BASE_URL);
    cy.contains('Hello World');
  });
});
