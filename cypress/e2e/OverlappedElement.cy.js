describe('Overlapped Element', () => {
    it('should enter text into the overlapped input field', () => {
      cy.visit('http://uitestingplayground.com/overlapped');
      
      // Use JavaScript to bring the input element into view
      cy.get('#name').then($el => {
        $el[0].scrollIntoView();
      });
      
      // Enter text into the input field
      cy.get('#name').type('Cypress Test');
      
      // Assert that the input value matches the entered text
      cy.get('#name').should('have.value', 'Cypress Test');
    });
  });
  