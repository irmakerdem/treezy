describe('Details Container', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/trees', {fixture : 'getTreeMockData.json'});
    cy.intercept('GET', 'https://tree-pal-api.herokuapp.com/api/v1/zip', {fixture : 'getZipMockData.json'});
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="header"]').contains('Treezy');
    cy.get('[data-cy="zip-code-entry"]').type('80101');
    cy.get('[data-cy="go-button"]').invoke('attr', 'value').should('contain', 'GO!')
    cy.get('[data-cy="go-button"]').click()
    cy.url().should('eq', 'http://localhost:3000/result')
    cy.get('.trees-container').within(() => {
      cy.get('.tree-image').should('have.length', 1).click()
    })
  })

  it('Should contain the details about Jane Magnolia tree', () => {
    cy.get('.tree-title').contains('Jane Magnolia')
    cy.get('.main-image > .detail-page-image').should('have.attr', 'src', 'https://raw.githubusercontent.com/irmakerdem/tree-pal-api/main/assets/jane-magnolia/jane-magnolia-main-wo-border.jpg')
    cy.get('.detail-page-image').should('have.length', 4); 
  })

  it('Should display about the tree', () => {
    cy.get('.details-middle').contains('About This Tree')
    cy.get('.bullet-list').should('have.length', 1).contains('Attractive Foliage')
  })

  it('Should have attributes', () => {
    cy.get('.more-about').contains('Attributes')
    cy.get('.emojis').should('have.length', 9).contains('🐝')
  })

  it('Should have leaf button', () => {
    cy.get('[data-cy="leaf-button"]').should('have.attr','value','LEAF!').click()
  })

  it('Should be able to go back to the home page when clicking logo', () => {
    cy.get('[data-cy="header"]').click()
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('Should be able to go ', () => {
    cy.get('.ext-link > .about-this-tree').should('have.attr','href','https://www.naturehills.com/magnolia-x-jane')
  })
})