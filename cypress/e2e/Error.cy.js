describe('Home', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/trees', {fixture : 'getTreeMockData.json'});
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/zip', {fixture : 'getZipMockData.json'});
    cy.visit('http://localhost:3000/banana/');
  })

  it('Should contain the header', () => {
    cy.get('[data-cy="header"]').contains('Treezy')
  })

  it('Should have error message', () => {
    cy.get('.error-messaging').contains('Thank you for visiting our website.')
  })

  it('Should be able to go back to the home page when clicking logo', () => {
		cy.get('[data-cy="header"]').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});
})