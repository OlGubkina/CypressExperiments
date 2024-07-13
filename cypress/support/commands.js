// HW18
// Після створення аккаунту створити кастомну команду login(), 
// яка буде виконувати логін із заданими кредами 
// для входу у систему через UI:

/** 
Cypress.Commands.add('customLogin', (username, password) => {
    cy.visit('/');
    cy.get('.btn.btn-outline-white.header_signin').click()
    cy.get('#signinEmail').type(username)
    cy.get('#signinPassword').type(password)
    cy.get('.modal-footer > .btn-primary').click()
  });
*/
import { regData18 } from "../fixtures/regData18";

Cypress.Commands.add('custLogin', ()=> {
          cy.get('#signinEmail').type(regData18.email);
          cy.get('#signinPassword').type(regData18.password, {sensitive:true});
      });

// Перевизначити команду type у відповідності з прикладом з документації 
// https://docs.cypress.io/api/cypress-api/custom-commands#Overwrite-Existing-Commands
// для того, щоб при вводі паролів сам пароль не відображався у логах Cypress
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
        // turn off original log
        options.log = false
        // create our own log with masked message
        Cypress.log({
            $el: element,
            name: 'type',
            message: '*'.repeat(text.length),
          })
        }
        return originalFn(element, text, options)
      })

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })