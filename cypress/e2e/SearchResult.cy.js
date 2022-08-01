describe('Search Result', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/trees', {fixture : 'getTreeMockData.json'});
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/zip', {fixture : 'getZipMockData.json'});
    cy.visit('http://localhost:3000/');
  })

  it('The user should see the home page', () => {
    cy.get('[data-cy="zip-code-entry"]').type('80101');
    cy.get('[data-cy="go-button"]').invoke('attr', 'value').should('contain', 'GO!')
    cy.get('[data-cy="go-button"]').click()
    cy.url().should('eq', 'http://localhost:3000/result')
    cy.get('.results-top').contains('AGATE')
    cy.get('.tree-name').contains('Jane Magnolia')
    cy.get('.trees-container').within(() => {
    cy.get('.tree-image').should('have.length', 1);
    cy.get('.tree-image').should('have.attr', 'src', 'https://raw.githubusercontent.com/irmakerdem/tree-pal-api/main/assets/jane-magnolia/jane-magnolia-main-wo-border.jpg')  
  })
 })
})

