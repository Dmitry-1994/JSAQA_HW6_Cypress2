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
Cypress.Commands.add("loginAdmin", (email, password) => {
    cy.get(locatorAdminLogin).type(email);
    cy.get(locatorAdminPassword).type(password);
    cy.contains("Авторизоваться").click();
});