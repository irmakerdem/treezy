describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/trees', {fixture : 'getTreeMockData.json'});
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/zip', {fixture : 'getZipMockData.json'});
    cy.visit('http://localhost:3000/');
  })

  it('The user should see the home page', () => {
    cy.get('[data-cy="header"]').contains('Treezy');
    cy.get('[data-cy="zip-code-entry"]').invoke('attr', 'placeholder').should('contain', 'Enter 5-Digit CO Zip Code');
    cy.get('[data-cy="go-button"]').invoke('attr', 'value').should('contain', 'GO!');
  })

 })