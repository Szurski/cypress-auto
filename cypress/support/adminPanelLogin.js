export function adminPanelLogin() {

    describe('Login test', () => {
        it('Logs into the admin panel', () => {
            cy.visit('http://localhost:8080/#/admin')
            cy.contains("account")
            cy.get("#username").type("admin")
            cy.get("#password").type("password")
            cy.get('#doLogin').click();
        })
    })
}