import { CommonElement } from "../utils/elements"
import { InputField } from "../utils/elements"

class WPage {
    // Sign up form: selectors
    signupBtn = '.hero-descriptor_btn'
    signupName = '#signupName'
    signupLastName = '#signupLastName'
    signupEmail = '#signupEmail'
    signupPassword = '#signupPassword'
    signupRepeatPassword = '#signupRepeatPassword'
    registerBtn = '.modal-footer > .btn'

    // Login form: selectors
    signInBtn = '.btn.btn-outline-white.header_signin'
    signInEmail = '#signinEmail'
    signInPassword = '#signinPassword'
    loginBtn= '.btn btn-primary'


    getSignupBtn() {return new CommonElement(this.signupBtn)} 
    getSignupName() {return new InputField(this.signupName)}   
    getSignupLastName() {return new InputField(this.signupLastName)}
    getSignupEmail() {return new InputField(this.signupEmail)}
    getSignupPassword() {return new InputField(this.signupPassword)}
    getSignupRepeatPassword() {return new InputField(this.signupRepeatPassword)}
    getRegisterBtn() {return new CommonElement(this.registerBtn)}

    getSignInBtn() {return new CommonElement(this.signInBtn)}
    getSignInEmail() {return new InputField(this.signInEmail)}
    getSignInPassword() {return new InputField(this.signInPassword)}
    getLoginButton() {return new CommonElement(this.loginBtn)}

    loginAction(){
        cy.get('#signinEmail').type(Cypress.env("login"))
        cy.get('#signinPassword').type(Cypress.env("password"))
        cy.get('.modal-footer > .btn-primary').click()
        cy.get('h1').contains('Garage')
    }
}

const wPage = new WPage()
export default wPage