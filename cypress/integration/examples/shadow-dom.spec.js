context('ShadowDOM', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });
  it('should read Shadow DOM content', () => {
    cy.get('#content')
      .shadow()
      .should('contain', 'Hey Cypress! Can you read this?');
  });
});
