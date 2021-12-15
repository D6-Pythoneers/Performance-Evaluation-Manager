describe("move to profile as a teacher", () => {
    beforeEach(() => {
        cy.login("renad", "Pass@123")
        cy.get('[data-cy=loading-image]')
    })

    it("moves profile as a teacher", () => {

        cy.visit('http://localhost:3000/profile')

    })
})

describe("move to profile as a manager", () => {
    beforeEach(() => {
        cy.login("majed", "Pass@123")
        cy.get('[data-cy=loading-image]')
    })

    it("moves to profile as a manger", () => {

        cy.visit('http://localhost:3000/profile')

    })
})

describe("move to dashboard as a teacher", () => {
    beforeEach(() => {
        cy.login("majed", "Pass@123")
        cy.get('[data-cy=loading-image]')
    })

    it("moves to profile as a manger", () => {
        cy.wait(10000)
        cy.visit('http://localhost:3000/dashboard')
        cy.get('[data-cy=]')

    })
})