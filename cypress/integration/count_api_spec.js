
const BASE_URL = 'http://localhost:3000/api/count';

describe('Count API', () => {
  it('Opens up', () => {
    cy.visit(BASE_URL);
    cy.contains('count');
  });
});
