import welcomePage from "../support/pages/WelcomePage"
import { registrationData } from "../fixtures/registrationData"

import rgbHex from "rgb-hex" //hex colors support: "npm install rgb-hex" + this import

describe('Registration-Name',()=> {
    beforeEach (()=>{cy.visit('/')})

    it ('Case 1: Text = Registration', () => {
        cy.get(welcomePage.getSignupBtn().click())
        cy.get('.modal-header').contains('Registration')
    })

    it ('Case 2.1: Field Name : Name required', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().clear()
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
       
        cy.get('.invalid-feedback > p').should('have.text','Name required')
        cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')

    })

    it ('Case 2.2.1: Field Name : Name is invalid', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(1)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get('.invalid-feedback > :nth-child(1)').contains('Name is invalid')
        cy.get('.invalid-feedback > :nth-child(2)').contains('Name has to be from 2 to 20 characters long')
        
        //border-color: #dc3545
        cy.get('#signupName')
            .invoke('css', 'border-color')
            .then((bocolor)=>{
                expect(rgbHex(bocolor)).to.eq('dc3545')
            })

        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 2.2.2: Field Name : Name is invalid - Space', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type('a a')
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get('.invalid-feedback > :nth-child(1)').contains('Name is invalid')
        //del - cy.get('.invalid-feedback > :nth-child(2)').contains('Name has to be from 2 to 20 characters long')
        
        //border-color: #dc3545
        cy.get('#signupName')
            .invoke('css', 'border-color')
            .then((bocolor)=>{
                expect(rgbHex(bocolor)).to.eq('dc3545')
            })

        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 2.3.1: Field Name : Name=20 symbols', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type('aaaaaaaaaaaaaaaaaaaa')
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
        welcomePage.getRegisterBtn().should('not.be.disabled')
    })

    it ('Case 2.3.2: Field Name : Name>20 symbols', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type('aaaaaaaaaaaaaaaaaaaaa')
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get('.invalid-feedback > p').contains('Name has to be from 2 to 20 characters long')
        cy.get('#signupName').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 3.1: Field LastName : LastName required', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().clear()
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
       
        cy.get('.invalid-feedback > p').should('have.text','Last name is required') // bug in the app
        cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')

    })

    it ('Case 3.2.1: Field LastName : LastName is invalid', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(1)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get('.invalid-feedback > :nth-child(1)').contains('Last name is invalid')
        cy.get('.invalid-feedback > :nth-child(2)').contains('Last name has to be from 2 to 20 characters long')        
        cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)')

        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 3.2.2: Field LastName : LastName is invalid - Space', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type('a a')
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get('.invalid-feedback > :nth-child(1)').should('have.text','Last name is invalid')
                
        cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)')

        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 3.3.1: Field LastName : LastName=20 symbols', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type('aaaaaaaaaaaaaaaaaaaa')
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
        welcomePage.getRegisterBtn().should('not.be.disabled')
    })
   
    it ('Case 3.3.2: Field LastName : LastName>20 symbols', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type( 'aaaaaaaaaaaaaaaaaaaaa')
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get('.invalid-feedback > p').contains('Last name has to be from 2 to 20 characters long')
        cy.get('#signupLastName').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 4.1: Field email : Wrong data', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type('r@r')
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
       
        cy.get('.invalid-feedback > p').should('have.text','Email is incorrect')
        cy.get('#signupEmail').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 4.2: Field email : Empty field', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().clear()
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)

        cy.get("div[class='invalid-feedback'] p").should('have.text', 'Email required')
        cy.get('#signupEmail').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 5.1: Field Password : Wrong data', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(1)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
        
        cy.get('p').contains('Password')
            .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 5.2: Field Password : Empty data', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().clear()
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
        
        cy.get('p').contains('Password')
            .should('have.text', 'Password required')
        cy.get('#signupPassword').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 6.1: Field Re-enter Password : Empty data', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupRepeatPassword().clear()
        welcomePage.getSignupPassword().type(registrationData.password)

        cy.get('.invalid-feedback > p')
            .should('have.text', 'Re-enter password required')
        cy.get('#signupRepeatPassword').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 6.2: Field Re-enter Password : Passwords do not match', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password+1)
        welcomePage.getSignupName().type(registrationData.userName)

        cy.get('.invalid-feedback > p')
            .should('have.text', 'Passwords do not match')
        cy.get('#signupRepeatPassword').should('have.css', 'border-color','rgb(220, 53, 69)')
        welcomePage.getRegisterBtn().should('be.disabled')
    })

    it ('Case 7: New user creation', () => {
        cy.get(welcomePage.getSignupBtn().click())
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
    
        welcomePage.getRegisterBtn().should('not.be.disabled')
        //здесь должен быть клик, проверка запроса на 201 и проверка БД на новую запись
    })

    it ('Case 8: Login', () => {
        cy.get('.btn.btn-outline-white.header_signin').click();
        cy.custLogin()
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('h1').contains('Garage')
    })
})