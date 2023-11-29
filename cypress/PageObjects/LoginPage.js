class Login {
    txtUsername = "input[name='username']"
    txtPassword = "input[name='password']"
    btnSubmit = "input[value='Log In']"
    lblHeading = "#leftPanel > p"

    setUsername(username) {
        cy.get(this.txtUsername).type(username)
    }
    setPassword(password) {
        cy.get(this.txtPassword).type(password)
    }
    submit() {
        cy.get(this.btnSubmit).click()
    }
    verifyLogin(assertion) {
        cy.get(this.lblHeading).should('contain.text', assertion)
    }
}

export default Login