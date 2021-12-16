describe("data renders correctly in teacher dashboard", () => {
    beforeEach(() => {
        cy.login("renad", "Pass@123")
    })
    it("shows correct data in goals table", () => {
        cy.get('[data-cy=loading-image]').should('exist')
        cy.wait(4000)
        cy.get('[data-cy=goals-table]').should('exist')
        cy.get('[data-cy=goal-entry]').contains("Get a the new ICDL certificate :D")
    })
    it("shows correct number of goals in goals table", () => {
        cy.get('[data-cy=loading-image]').should('exist')
        cy.wait(4000)
        cy.get('[data-cy=goals-table]').should('exist')
        cy.get('[data-cy=goals-table]').find('[data-cy=goal-row]').should('have.length', 4)
    })
})