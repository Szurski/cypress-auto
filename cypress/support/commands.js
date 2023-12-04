/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

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
        'assertion': "Your account was created successfully.",
        'accountCreationAssertion':"Your new account number:"
    })
})