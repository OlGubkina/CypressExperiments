import welcomePageNew from "../pages/WelcomePageNew"
import { registrationData } from "../../fixtures/registrationData"
import { CommonElement, InputField } from "../utils/elements"

//import pm from "../pages/PageManager"

const welcomePageStepsNew = {
    enterUserInfoWithoutRepeatedPassword() {
        pm.WelcomePageNew.getSignupBtn().clickElement()
        pm.WelcomePageNew.getSignupName()
            .isVisible()
            .verifyIsNotDisabled()
            .enterValue(registrationData.userName)
        pm.WelcomePageNew.getSignupLastName().enterValue(registrationData.userLastName)
        pm.WelcomePageNew.getSignupEmail().enterValue(registrationData.email)
        pm.WelcomePageNew.getSignupPassword().enterValue(registrationData.password)
    },

    enterRepeatedPassword() {
        pm.WelcomePageNew.getSignupRepeatPassword().enterValue(registrationData.password)
    },

    verifyRegisterButtonIsDisabled() {
        pm.WelcomePageNew.getRegisterBtn().verifyIsDisabled
    },

    verifyRegisterButtonIsEnabled() {
        pm.WelcomePageNew.getRegisterBtn().verifyIsNotDisabled
    }
}

export default welcomePageStepsNew