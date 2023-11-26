Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});



describe('Loging into the admin panel test', () => {
  it('Logs into the admin panel', () => {
    cy.login("admin","password")
  })

})