
import { adminPanelLogin } from "../support/adminPanelLogin";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const newRoom = '#roomName'+`${id}`

describe('Viewing a created room', () => {
  it('Creates a room', () => {
    cy.login("admin","password")
    cy.get('#roomName').type(`${id}`)
    cy.get('#type').select('Twin')
    cy.get('#accessible').select('true')
    cy.get('#roomPrice').type('500')
    cy.get('[type="checkbox"]').check()
    cy.get('#createRoom').click()
    it('Views a created room', () => {
        cy.get(newRoom).click()
        cy.contains("Room: "+ `${id}`)
        cy.screenshot()
      })
    
  })
 

})