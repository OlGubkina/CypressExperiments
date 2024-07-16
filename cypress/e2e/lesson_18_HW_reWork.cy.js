import welcomePage from "../support/pages/WelcomePage"
import { registrationData } from "../fixtures/registrationData"

import rgbHex from "rgb-hex"
import wPage from ".AAA/WPage"; //hex colors support: "npm install rgb-hex" + this import

describe('Registration-Name',()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Case 1: Text = Registration', () => {
        wPage.getSignupBtn().click()

        cy.get('.modal-header').contains('Registration')
    })

    it('Case 2.1: Field Name : Name required', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().clear()
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get('.invalid-feedback > p').should('have.text', 'Name required')
        cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })
})