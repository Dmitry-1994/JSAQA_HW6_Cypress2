describe("Базовый функционал", () => {
    const selectors = require("../fixtures/selectors.json");
    const adminData = require("../fixtures/adminData.json");
    it("Отображение главное страницы", () => {
        cy.visit("/");
        cy.contains(selectors.headerTitle).should("be.visible");
        cy.get(selectors.navLinks).should("have.length", 7);
    });

    it("Успешный вход под admin", () => {
        cy.visit("/admin");
        cy.get(selectors.adminLogin).type(adminData.validAdmin.login);
        cy.get(selectors.adminPassword).type(adminData.validAdmin.password);
        cy.contains(selectors.adminAuth).click();
        cy.contains(selectors.headerTitle).should("be.visible");
        cy.contains(selectors.adminTitle).should("be.visible");
    });
});
