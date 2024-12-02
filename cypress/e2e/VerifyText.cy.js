describe('Verify Text', () => {
    it('should verify the exact text "Welcome UserName!"', () => {
      cy.visit('http://uitestingplayground.com/verifytext');
      
      // Assert the exact text using normalize-space approach
      cy.xpath("//span[normalize-space(.)='Welcome UserName!']")
        .should('exist'); 
    });
  });
  