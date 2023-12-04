class Accounts {
    selectAccountType = "#type"
    selectExistingAccount = "#fromAccountId"
    btnSubmit = "input[value='Open New Account']"
    lblNewAccount = "#rightPanel"

    setAccountType() {
        cy.get(this.selectAccountType).select('SAVINGS')
    }
    setExistingAccount() {
        cy.get(this.selectExistingAccount).select(0)
    }
    submit() {
        cy.get(this.btnSubmit).click()
    }
    verifyAccountCreation(assertion){
        cy.get(this.lblNewAccount).should('contain.text', assertion)
    }
}

export default Accounts