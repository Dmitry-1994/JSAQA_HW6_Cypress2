const selectors = require("../fixtures/selectors.json");
//const adminData = require("../fixtures/adminData.json");

Cypress.Commands.add("loginAdmin", (login, password) => {
    cy.get(selectors.adminLogin).type(login);
    cy.get(selectors.adminPassword).type(password);
    cy.contains(selectors.adminAuth).click();
});

Cypress.Commands.add("getTextElement", locator => {
    return cy
        .get(locator)
        .should("be.visible")
        .invoke("text")
        .then(text => text.trim());
});

Cypress.Commands.add("choiceTime", (navText, navHall) => {
    cy.get(navText).then(text => {
        cy.contains(selectors.movieObject, text).contains(navHall).click();
    });
});

Cypress.Commands.add("choiceDay", locator => {
    cy.get(locator).click();
});

Cypress.Commands.add("choiceSeat", (row, seat) => {
    cy.get(
        `${selectors.hallArea} :nth-child(${row}) > :nth-child(${seat})`
    ).click();
});

Cypress.Commands.add("checkSeat", (row, seat) => {
    cy.get(selectors.checkDetailsOfSeats)
        .contains(`${row}/${seat}`)
        .should("be.visible");
});
