describe('Home', () => {
  beforeEach('The user should see the home page', () => {
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/trees', {fixture : 'getTreeMockData.json'})
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/zip', {fixture : 'getZipMockData.json'})
    cy.visit('https://localhost:3000/');
  })
  it('Should ', () => {
    cy.visit('https://example.cypress.io')
  })
})