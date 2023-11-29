/// <reference types="cypress" />
import Login from "../PageObjects/LoginPage"
import Register from "../PageObjects/RegistrationPage"

describe('User Registration and Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Verifies user is able to register', () => {
        cy.visit('/register.htm')
        cy.generateFixture().then(() => {
            cy.fixture('registeredUser').then((data) => {
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

    it('Verifies user is able to login', () => {
        cy.fixture('defaultUser').then((data) => {
            const login = new Login()
            login.setUsername(data.username)
            login.setPassword(data.password)
            login.submit()
            login.verifyLogin(data.assertion)
        })
    })
})