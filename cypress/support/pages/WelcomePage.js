class WelcomePage {
    signupBtn = '.hero-descriptor_btn'
    signupName = '#signupName'
    signupLastName = '#signupLastName'
    signupEmail = '#signupEmail'
    signupPassword = '#signupPassword'
    signupRepeatPassword = '#signupRepeatPassword'
    registerBtn = '.modal-footer > .btn'

    getSignupBtn() {return cy.get(this.signupBtn)}
    getSignupName() {return cy.get(this.signupName)}
    getSignupLastName() {return cy.get(this.signupLastName)}
    getSignupEmail() {return cy.get(this.signupEmail)}
    getSignupPassword() {return cy.get(this.signupPassword)}
    getSignupRepeatPassword() {return cy.get(this.signupRepeatPassword)}
    getRegisterBtn() {return cy.get(this.registerBtn)}

    enterUserInfo() {
        
    }
}

const welcomePage = new WelcomePage()
export default welcomePage