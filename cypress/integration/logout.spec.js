
describe("logout", () => {
    beforeEach(() => {
        cy.login("renad", "Pass@123")
        cy.get('[data-cy=loading-image]')
    })

    it("logs out", () => {
        cy.wait(4000)
        cy.get('[data-cy=pop-up]').click()
        cy.get('[data-cy=logout-button]').click()

    })
})