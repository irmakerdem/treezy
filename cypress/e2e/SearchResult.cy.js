describe('Search Result', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/trees', {fixture : 'getTreeMockData.json'});
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/zip', {fixture : 'getZipMockData.json'});
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="header"]').contains('Treezy');
    cy.get('[data-cy="zip-code-entry"]').type('80101');
    cy.get('[data-cy="go-button"]').invoke('attr', 'value').should('contain', 'GO!')
    cy.get('[data-cy="go-button"]').click()
    cy.url().should('eq', 'http://localhost:3000/result')
  })

  it('The user should see search results', () => {
    cy.get('.results-top').contains('AGATE')
    cy.get('.tree-name').contains('Jane Magnolia')
    cy.get('.trees-container').within(() => {
      cy.get('.tree-image').should('have.length', 1);
      cy.get('.tree-image').should('have.attr', 'src', 'https://raw.githubusercontent.com/irmakerdem/tree-pal-api/main/assets/jane-magnolia/jane-magnolia-main-wo-border.jpg')  
    })
  })

  it('Should have leaf button', () => {
    cy.get('[data-cy="leaf-button"]').should('have.attr','value','LEAF!').click()
  })
})

