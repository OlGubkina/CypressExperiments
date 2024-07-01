//const { beforeEach } = require("mocha")

/* const enterUserInfo = function() {
        cy.get('#signupName').type('Nameee')
        cy.get('#signupLastName').type('LastNameee')
        cy.get('#signupEmail').type('Nameee.last@gmail.com')
        cy.get('#signupPassword').type('12345678Na')
        cy.get('#signupRepeatPassword').type('12345678Na')
} */

describe('Sgn up into hillel',()=> {

    beforeEach (()=>{
        cy.visit('/') // BaseUrL из конфига
    })

    it ('verify user can sign in', ()=> {
        cy.viewport(2000, 3000) // разрешение экрана для конкретного теста
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupName').type('Nameee')
        cy.get('#signupLastName').type('LastNameee')
        cy.get('#signupEmail').type('Nameee.last@gmail.com')
        cy.get('#signupPassword').type('12345678Na')
        cy.get('#signupRepeatPassword').type('12345678Na')      
        cy.get('button').contains('Register').click()
        // cy.get('element').should('have text', env === 'Prod' ? 'Prod text' : 'Dev text')
    })

    it.only('test', {retries: 1}, ()=> { // остальные будут skipped // основная попытка + 1 ретрай
        cy.get('.hero-descriptor_btn', { timeout: 10000 }).click() 
        // будет ждать 10 сек прогрузки элемента (4 debug)
        // задаётся в конфиге глобальной переменной
    })

    it.skip('test', ()=> { // не будут запущены
        cy.get('.hero-descriptor_btn').click()
    })

    after (()=>{cy.log('After block')})
})
    
