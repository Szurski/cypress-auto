/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

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
Cypress.Commands.add('generateFixture', () => {
    cy.writeFile('cypress/fixtures/registeredUser.json', {
        'firstName': `${faker.person.firstName()}`,
        'lastName': `${faker.person.lastName()}`,
        'street': `${faker.location.street()}`,
        'city': `${faker.location.city()}`,
        'state': `${faker.location.state()}`,
        'zipCode': `${faker.location.zipCode()}`,
        'phoneNo': `${faker.phone.number()}`,
        'ssn': `${faker.number.int({ min: 1000000, max: 9999999 })}`,
        'username': `${faker.internet.userName()}`,
        'password': `${faker.internet.password()}`,
        'assertion':"Your account was created successfully."
    })
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