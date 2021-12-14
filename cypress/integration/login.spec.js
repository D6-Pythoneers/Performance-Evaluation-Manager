describe("login", () => {

    
    it('logs in registered user', () => {
        cy.login()
    })
})

describe("logout", () => {
    beforeEach(() => {
        cy.login()
    })
    it('logs out logged in user', () => {
        cy.get('[data-cy=logout-button]').click()
        cy.get('form')
    })

})

