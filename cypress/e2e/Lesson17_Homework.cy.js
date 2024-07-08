// найти все кнопки и линки из header и footer

import welcomePage from "../support/pages/WelcomePage"
import welcomePageSteps from "../support/steps/WelcomePageSteps"

describe('Welcome page: all buttons and links are visible',()=> {
    beforeEach (()=>{
        cy.visit('/')
    })

    // Header buttons

    it ('Home btn is visible', () => {
        cy.get('.-active').should('be.visible')
    })

    it ('About btn is visible', () => {
        cy.get('[appscrollto="aboutSection"]').should('be.visible')
    })

    it ('Contacts btn is visible', () => {
        cy.get('[appscrollto="contactsSection"]').should('be.visible')
    })

    it ('Guest login btn is visible', () => {
        cy.get('.header_right > .header-link').should('be.visible')
    })

    it ('Sign in btn is visible', () => {
        cy.get('.header_right > .btn').should('be.visible')
    })
   
    // Footer buttons

    it ('FB btn is visible', ()=> {
        cy.get('.socials_icon.icon.icon-facebook').should('be.visible')
    })

    it ('Telegram btn is visible', ()=> {
        cy.get('.socials_icon.icon.icon-telegram').should('be.visible')
    })

    it ('YouTube btn is visible', ()=> {
        cy.get('.socials_icon.icon.icon-youtube').should('be.visible')
    })

    it ('Instagram btn is visible', ()=> {
        cy.get('.socials_icon.icon.icon-instagram').should('be.visible')
    })

    it ('LinkedIn btn is visible', ()=> {
        cy.get('.socials_icon.icon.icon-linkedin').should('be.visible')
    })

    it ('Hillel main page btn is visible', ()=> {
        cy.get('.display-4').should('be.visible')
    })

    it ('Support email link is visible', ()=> {
        cy.get('.h4').should('be.visible')
    })
})