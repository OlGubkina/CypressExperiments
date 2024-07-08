import welcomePage from "../pages/WelcomePage"
import { registrationData } from "../../fixtures/registrationData"

const welcomePageSteps = {
    enterUserInfoWithoutRepeatedPassword() {
        welcomePage.getSignupBtn().click()
        welcomePage.getSignupName().type(registrationData.userName)
        welcomePage.getSignupLastName().type(registrationData.userLastName)
        welcomePage.getSignupEmail().type(registrationData.email)
        welcomePage.getSignupPassword().type(registrationData.password)
    },

    enterRepeatedPassword() {
        welcomePage.getSignupRepeatPassword().type(registrationData.password)
    },

    verifyRegisterButtonIsDisabled() {
        welcomePage.getRegisterBtn().should('be.disabled')
    },

    verifyRegisterButtonIsEnabled() {
        welcomePage.getRegisterBtn().should('not.be.disabled')
    }
}

export default welcomePageSteps