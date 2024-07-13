import welcomePageNew from "../support/pages/WelcomePage"
import welcomePageStepsNew from "../support/steps/WelcomePageSteps"

//import sm from "../support/steps/StepsManager"

describe('Sgn up into hillel',()=> {
    beforeEach (()=>{
        cy.visit('/')
        welcomePageStepsNew.enterUserInfoWithoutRepeatedPassword();
    })

    it ('Verify Register btn is clickable', ()=> {
        welcomePageStepsNew.enterRepeatedPassword()
        welcomePageStepsNew.verifyRegisterButtonIsEnabled()
    })

    it ('Verify Register btn is unclickable if repeat pass is empty', ()=> {
        welcomePageStepsNew.verifyRegisterButtonIsDisabled()
    })
})