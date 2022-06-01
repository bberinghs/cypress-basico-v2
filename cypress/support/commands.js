Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Bruno')
    cy.get('#lastName').type('Beringhs')
    cy.get('#email').type('bruno@beringhs.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button' , 'Enviar').click()
})
