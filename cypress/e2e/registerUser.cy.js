/// <reference types="cypress" />

describe('User Registration and Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/parabank/')
    })

    it('Verifies user is able to register', () => {
        cy.contains('Register').click()
    })

    it('Verifies user is able to login', () => {
        cy.login()
    })
})