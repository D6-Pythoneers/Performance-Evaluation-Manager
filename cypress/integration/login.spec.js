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