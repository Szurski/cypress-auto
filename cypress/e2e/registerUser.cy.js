/// <reference types="cypress" />

describe('User Registration and Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.only('Verifies user is able to register', () => {
        cy.visit('/register.htm')
        cy.register()
    })

    it('Verifies user is able to login', () => {
        cy.login()
    })
})