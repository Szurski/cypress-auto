/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-    
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('register', () =>{
let password = faker.internet.password()
let username = faker.internet.userName()
cy.visit('/register.htm')
cy.get('#customer\\.firstName').type(faker.person.firstName())
cy.get('#customer\\.lastName').type(faker.person.lastName())
cy.get('#customer\\.address\\.street').type(faker.location.street())
cy.get('#customer\\.address\\.city').type(faker.location.city())
cy.get('#customer\\.address\\.state').type(faker.location.state())
cy.get('#customer\\.address\\.zipCode').type(faker.location.zipCode())
cy.get('#customer\\.phoneNumber').type(faker.phone.number())
cy.get('#customer\\.ssn').type(faker.number.int({ min: 1000000, max: 9999999 }))
cy.get('#customer\\.username').type(username)
cy.get('#customer\\.password').type(password)
cy.get('#repeatedPassword').type(password)
cy.get('form').contains('Register').click()

cy.contains(`Welcome ${username}`)
})

Cypress.Commands.add('login', () =>{
    let password = faker.internet.password()
    let username = faker.internet.userName()
    cy.get('input[name="username"').type('john')
    cy.get('input[name="password"').type('demo')
    cy.get('form').contains('Log In').click()
    
    cy.contains('Welcome John')
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })