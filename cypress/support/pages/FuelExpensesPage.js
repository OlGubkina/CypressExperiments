class FuelExpensesPage {
    addFuelExpenceAction() {
    cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_add-expense').click();
    cy.get('#addExpenseLiters').type('3');
    cy.get('#addExpenseTotalCost').type('2000'+1);
    cy.get('.modal-footer > .btn-primary').click()
    }
}

const fuelExpensesPage = new FuelExpensesPage()
export default fuelExpensesPage


