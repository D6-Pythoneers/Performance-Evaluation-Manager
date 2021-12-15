describe("data renders correctly in manager dashboard", () => {
    beforeEach(() => {
        cy.login("majed", "Pass@123")
    })
    it("shows correct data in teacher cards", () => {
        cy.get('[data-cy=loading-image]').should('exist')
        cy.wait(4000)
        cy.get('[data-cy=manager-dashboard]').should('exist')
        cy.get('[data-cy=teacher-card]').should('exist')
        cy.get('h2').contains("Nicola")
    })
})