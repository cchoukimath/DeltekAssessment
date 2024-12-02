describe('Disabled Input', () => {
    it('should verify the input is disabled, wait until it is enabled, and then enter text', () => {
      cy.visit('http://uitestingplayground.com/disabledinput');
      
      // Click the button to start the enabling process
      cy.get('#enableButton').click();
  
      // Wait until the input field becomes enabled
      cy.get('#inputField', { timeout: 10000 }) // Adjust timeout if necessary
        .should('not.be.disabled'); // Assertion ensures the field is enabled
  
      // Enter text into the now-enabled input field
      cy.get('#inputField').type('Test QA');
    });
  });
  