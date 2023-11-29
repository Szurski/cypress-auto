/// <reference types="cypress" />

describe('User Manipulation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verifies user is able to register', () => {
        cy.register()
    })

    it('Verifies user is able to login', () => {
        cy.login()
    })

    it.only('Verifies user is able to change his/her data', () => {
        cy.register()
        cy.contains("Update Contact Info").click()
        cy.get('#customer\\.firstName').clear().type('Thomas')
        cy.get('form').contains('Update Profile').click()
        cy.contains('Profile Updated')
    })

    
})