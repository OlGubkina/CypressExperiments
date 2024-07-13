export class CommonElement {
    constructor (element){
        this.element = cy.get(element)
    }

    isVisible(){
        this.element.should('be.visible')
        return this
    }

    clickElement(){
        this.element.click()
        return this
    }

    verifyIsDisabled(){
        this.element.should('be.disabled')
        return this
    }

    verifyIsNotDisabled(){
        this.element.should('not.be.disabled')
        return this
    }
}

export class InputField extends CommonElement {
    enterValue (value) {
        this.element.clear().type(value)
        return this
    }
}