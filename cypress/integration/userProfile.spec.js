describe("data renders correctly in teacher profile", () => {
    beforeEach(() => {
        cy.login("renad", "Pass@123")
    })
    it("shows correct teacher data in teacher profile", () => {
        cy.get('[data-cy=loading-image]').should('exist')
        cy.wait(4000)
        cy.visit("/profile")
        cy.get('[data-cy=user-data]').should('exist')
        cy.get('[data-cy=user-name]').contains("Name :Renad Alkhalafat")
        cy.get('[data-cy=user-email]').contains("Email : renad@api.com")
        cy.get('[data-cy=user-role]').contains("Role : teacher")
    })
})