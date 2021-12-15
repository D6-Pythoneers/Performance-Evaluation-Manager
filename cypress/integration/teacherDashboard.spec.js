describe("data renders correctly in teacher dashboard", () => {
    beforeEach(() => {
        cy.login("renad", "Pass@123")
    })
    it("shows correct data in goals table", () => {
        cy.get('[data-cy=loading-image]').should('exist')
        cy.wait(4000)
        cy.get('[data-cy=teacher-dashboard]').should('exist')
        cy.get('[data-cy=goals-table]').should('exist')
        cy.get('[data-cy=goal-entry]').contains("Get a the new ICDL certificate :D")
    })
})