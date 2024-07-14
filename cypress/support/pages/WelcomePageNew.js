import { CommonElement } from "../utils/elements"
import { InputField } from "../utils/elements"

//import pm from "./PageManager"

class welcomePageNew {
    signupBtn = '.hero-descriptor_btn'
    signupName = '#signupName'
    signupLastName = '#signupLastName'
    signupEmail = '#signupEmail'
    signupPassword = '#signupPassword'
    signupRepeatPassword = '#signupRepeatPassword'
    registerBtn = '.modal-footer > .btn'

    getSignupBtn() {return new CommonElement(this.signupBtn)} 
    getSignupName() {return new InputField(this.signupName)}   
    getSignupLastName() {return new InputField(this.signupLastName)}
    getSignupEmail() {return new InputField(this.signupEmail)}
    getSignupPassword() {return new InputField(this.signupPassword)}
    getSignupRepeatPassword() {return new InputField(this.signupRepeatPassword)}
    getRegisterBtn() {return new CommonElement(this.registerBtn)}
   
    enterUserInfo() {
    }

    signInAction() {
        
    }
}

const welcomePageNew = new welcomePageNew()
export default welcomePageNew