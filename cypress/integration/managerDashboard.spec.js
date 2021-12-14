import ManagerDashboard from "../../components/ManagerDashboard/ManagerDashboard";
import Redirect from "../../components/Redirect";
//import { mount } from '@cypress/react'
describe("manager dashboard", () => {
    beforeEach(() => {
        cy.login()
    })
    it("renders the manager dashboard ", () => {
        //mount(<ManagerDashboard />)
        cy.get("[data-cy=manager-dashboard]").should('exist')
        
    })
})