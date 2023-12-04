/// <reference types="cypress" />
import Register from "../PageObjects/RegistrationPage"
import Accounts from "../PageObjects/AccountsPage"
import Login from "../PageObjects/LoginPage"
describe('Accout Creation', () => {
    before(() => {
        cy.generateFixture().then(() => {
            cy.fixture('registeredUser').then((data) => {
                cy.visit('/register.htm')
                const register = new Register()
                register.setFirstName(data.firstName)
                register.setLastName(data.lastName)
                register.setStreet(data.street)
                register.setCity(data.city)
                register.setState(data.state)
                register.setZipCode(data.zipCode)
                register.setPhoneNo(data.phoneNo)
                register.setSsn(data.ssn)
                register.setUsername(data.username)
                register.setPassword(data.password)
                register.setRepeatedPassword(data.password)
                register.submit()
                register.verifyRegistration(data.assertion)
            })
        })
    })
    
    beforeEach(() => {
        cy.visit('/')
    })
    

    it('Verifies user is able to create a new savings account', () => {
        const accounts = new Accounts()
        cy.visit('/openaccount.htm')
        accounts.setAccountType()
        accounts.setExistingAccount()
        accounts.submit()
        accounts.verifyAccountCreation('Your new account number:')
    })

    it('Verifies user is able to check account details', () => {
        cy.fixture('registeredUser').then((data) => {
            const login = new Login()
            login.setUsername(data.username)
            login.setPassword(data.password)
            login.submit()
            cy.visit('/overview.htm')
        })
    })
})