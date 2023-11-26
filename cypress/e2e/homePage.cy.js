/// <reference types="cypress" />
describe('Verifying aplication is running', () => {
    it('Verifies app is up', () => {
    cy.visit('http://localhost:8080/parabank')
    cy.get('#topPanel > p').contains('Experience the difference')
    })
})