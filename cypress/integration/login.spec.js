describe("login", () => {
    const username = "renad";
    const password = "Pass@123";

    beforeEach(()=> {
        cy.visit('http://localhost:3000');
    })
    
    it('logs in registered user', () => {
        cy.get('[data-cy=login-id]').type(username);
        cy.get('[data-cy=login-password]').type(password);
        cy.get('[data-cy=login-submit]').click();

    })
})

describe("logout", () => {
    beforeEach(() => {
        const username = "renad";
        const password = "Pass@123";
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=login-id]').type(username);
        cy.get('[data-cy=login-password]').type(password);
        cy.get('[data-cy=login-submit]').click();
    })
    it('logs out logged in user', () => {
        cy.get('[data-cy=logout-button]').click()
        cy.get('form')
    })

})