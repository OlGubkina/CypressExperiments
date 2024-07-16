import wPage from "../support/pages/WPage";
import garagePage from "../support/pages/GaragePage";
import fuelExpensesPage from "../support/pages/FuelExpensesPage";

describe('Login',()=> {
    beforeEach(() => {
        //cy.visit('/')
        cy.visit(Cypress.env("envURL"))
        wPage.getSignInBtn().clickElement()
        cy.get('.modal-content').should(`be.visible`)
        wPage.loginAction()
    })

    it('Add the car with fuel', () => {
        garagePage.addCarAction()
        fuelExpensesPage.addFuelExpenceAction()
    })
})

//baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',