describe("login as a teacher", () => {
    it("logs in registered teacher", () => {
      cy.login("renad", "Pass@123");
    });
  });
  
  describe("login as a manager", () => {
      it("logs in registered manager", () => {
        cy.login("majed", "Pass@123");
      });
    });