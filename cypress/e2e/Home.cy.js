describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/trees', {fixture : 'getTreeMockData.json'});
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/zip', {fixture : 'getZipMockData.json'});
    cy.visit('http://localhost:3000/');
  })

  it('The user should see the home page', () => {
    cy.get('[data-cy="header"]').contains('Treezy');
  })

})