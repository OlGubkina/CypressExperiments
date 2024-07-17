class GaragePage {
    addCarAction() {
        cy.get("button").contains('Add car').click()
        cy.get('.modal-header').contains('Add a car')
        cy.get('#addCarBrand').select(1)
        cy.get('#addCarModel').select(2)
        cy.get('#addCarMileage').type('10')
        cy.get('.modal-footer > .btn-primary').click()

    }
}

const garagePage = new GaragePage()
export default garagePage