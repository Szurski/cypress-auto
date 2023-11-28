/// <reference types="cypress" />

describe('User Registration and Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/parabank/')
    })

    it('Verifies user is able to register', () => {
        cy.visit('http://localhost:8080/parabank/register.htm')
        cy.register()
    })

    it('Verifies user is able to login', () => {
        cy.visit('http://localhost:8080/parabank/')
        cy.login()
    })
})