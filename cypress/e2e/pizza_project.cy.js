
describe('Siparis Page', () => {
  describe('Error Messages', () => {
    it('size buttons throw error when unselected', () => {
      //Arrange
      cy.visit('http://localhost:5173/siparissayfasi')
      //Act data-cy ile inputları belirle
      cy.get('[data-cy="size-input"]').should("not.be.checked");
      //Asserts
      cy.contains("Boyut seçiniz").should('be.visible')
  });
    it('select throw error when unselected', () => {
    //Arrange
    cy.visit('http://localhost:5173/siparissayfasi')
    //Act data-cy ile inputları belirle
    cy.get('[data-cy="dough-input"]').should("be.checked");
    //Asserts
    cy.contains("Hamur seçiniz").should('be.visible')
});
    it('when 5 checkboxes selected do not throw error', () => {
      //Arrange
      cy.visit('http://localhost:5173/siparissayfasi')
      //Act data-cy ile inputları belirle
      cy.get('[data-cy="checkbox-input"]').each(($el, index) => {
        if (index < 5) {
          cy.wrap($el).check({force: true});
        }
      });
      //Asserts
      cy.get('[data-cy="error-message"]').should('not.exist'); //should not be visible dediğimde neden çalışmadı?
    });
    it('submit button is disble when all required fields are empty', () => {
  
      cy.visit('http://localhost:5173/siparissayfasi');
      
      
      cy.get('[data-cy="size-input"]').should("not.be.checked");

      cy.get('[data-cy="dough-input"]').should('be.checked');

      cy.get('[data-cy="checkbox-input"]').should("not.be.checked");

      cy.get('[data-cy="name-input"]').type('ab'); 
      
      // Assert: Submit button should be enabled
      cy.get('[data-cy="submit-button"] button').should('be.disabled');
    });
  })
})

