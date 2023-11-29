import { faker } from "@faker-js/faker"
class Register {
    txtFirstName = "#customer\\.firstName"
    txtLastName = "#customer\\.lastName"
    txtStreet = "#customer\\.address\\.street"
    txtCity = "#customer\\.address\\.city"
    txtState = "#customer\\.address\\.state"
    txtZipCode = "#customer\\.address\\.zipCode"
    txtPhoneNo = "#customer\\.phoneNumber"
    txtSsn = "#customer\\.ssn"
    txtUsername = "#customer\\.username"
    txtPassword = "#customer\\.password"
    txtRepeatedPassword = "#repeatedPassword"
    btnSubmit = "input[value='Register']"
    lblMessage = "#rightPanel > p"

    setFirstName(firstName) {
        cy.get(this.txtFirstName).type(firstName)
    }
    setLastName(lastName) {
        cy.get(this.txtLastName).type(lastName)
    }
    setStreet(street) {
        cy.get(this.txtStreet).type(street)
    }
    setCity(city) {
        cy.get(this.txtCity).type(city)
    }
    setState(state) {
        cy.get(this.txtState).type(state)
    }
    setZipCode(zipCode) {
        cy.get(this.txtZipCode).type(zipCode)
    }
    setPhoneNo(phoneNo) {
        cy.get(this.txtPhoneNo).type(phoneNo)
    }
    setSsn(ssn) {
        cy.get(this.txtSsn).type(ssn)
    }
    setUsername(username) {
        cy.get(this.txtUsername).type(username)
    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }
    setRepeatedPassword(password) {
        cy.get(this.txtRepeatedPassword).type(password)
    }
    submit() {
        cy.get(this.btnSubmit).click()
    }
    verifyRegistration(assertion) {
        cy.get(this.lblMessage).should('contain.text', assertion)
    }
}

export default Register