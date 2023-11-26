
import { adminPanelLogin } from "../support/adminPanelLogin";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


describe('Creating a new room test', () => {
  it('Creates a room', () => {
    cy.login("admin","password")
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    cy.get('#roomName').type(`${id}`)
    cy.get('#type').select('Twin')
    cy.get('#accessible').select('true')
    cy.get('#roomPrice').type('500')
    cy.get('[type="checkbox"]').check()
    cy.get('#createRoom').click()
  })
})