/// <reference types="cypress" />
describe('Registration Test', () => {
    before(() => {
        cy.visit('http://localhost:8080/parabank/register.htm')
    })
    it('Verifies user is able to register', () => {
    cy.get('#customer\\.firstName').type('Adam')
    cy.get('#customer\\.lastName').type('Szurma')
    cy.get('#customer\\.address\\.street').type('123 Main')
    cy.get('#customer\\.address\\.city').type('London')
    cy.get('#customer\\.address\\.state').type('London')
    cy.get('#customer\\.address\\.zipCode').type('NW1 123')
    cy.get('#customer\\.phoneNumber').type('123 456 789')
    cy.get('#customer\\.ssn').type('123456789')
    cy.get('#customer\\.username').type('adam.szurma')
    cy.get('#customer\\.password').type('password')
    cy.get('#repeatedPassword').type('password')
    cy.get('form').contains('Register').click()

    cy.contains('Welcome')
    })
})