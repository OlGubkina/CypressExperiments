import welcomePage from "../support/pages/WelcomePage"
import welcomePageSteps from "../support/steps/WelcomePageSteps"

describe('Sgn up into hillel',()=> {
    beforeEach (()=>{
        cy.visit('/'); // BaseUrL из конфига cypress.config.js
        welcomePageSteps.enterUserInfoWithoutRepeatedPassword();
    })

    it ('Verify Register btn is clickable', ()=> {
        welcomePageSteps.enterRepeatedPassword()
        welcomePageSteps.verifyRegisterButtonIsEnabled()
    })

    it ('Verify Register btn is unclickable if repeat pass is empty', ()=> {
        welcomePageSteps.verifyRegisterButtonIsDisabled()
    })







        //cy.get('asd').contains('Test')
        //cy.contains('lokator', 'link test') // same as 8

        //cy.get('.header_right > header-link').click
        //cy.contains('a', 'Garage') // link with text=Garage

        //Cypress может работать с xpath через плагин
        // npm install -D cypress-xpath
        // Добавить в файл js: import 'cypress-xpath' и использовать xpath селекторы через
        // cy.xpath('selector') // плохой варик
        
        //cy.get('.sidebar .-active').invoke('attr', 'class') // взять элемент по атрибуту

        // .its('property')возвращает проперти по названию

        //cy.get('.sidebar_btn').siblings() // берет все братские элементы
        //cy.title() // возвращает тайтл страницы

        //.force() // не использовать. не ждёт появления элемента





        // guest
        // welcome2qauto
        
        // cy.get('element').should('have text', env === 'Prod' ? 'Prod text' : 'Dev text')
    //})
})


//npx cypress open