describe("Базовый функционал", () => {
    const selectors = require("../fixtures/selectors.json");
    const adminData = require("../fixtures/adminData.json");
    const seats = require("../fixtures/seatsData.json");

    it("Отображение главное страницы", () => {
        cy.visit("/");
        cy.contains(selectors.headerTitle).should("be.visible");
        cy.get(selectors.navLinks).should("have.length", 7);
    });

    it("Успешный вход под admin", () => {
        cy.visit("/admin");
        cy.loginAdmin(
            adminData.validAdmin.login,
            adminData.validAdmin.password
        );
        cy.contains(selectors.headerTitle).should("be.visible");
        cy.contains(selectors.adminTitle).should("be.visible");
    });

    it("Неуспешный вход под admin", () => {
        cy.visit("/admin");
        cy.loginAdmin(
            adminData.validAdmin.login,
            adminData.invalidAdmin.password
        );
        cy.contains(selectors.massageError).should("be.visible");
    });

    it.only("Успешное бронирование фальма в зале", () => {
        cy.visit("/admin");

        cy.loginAdmin(
            adminData.validAdmin.login,
            adminData.validAdmin.password
        );

        cy.getTextElement(`${selectors.movieId} ${selectors.movieName}`).as(
            "textValue"
        );

        cy.visit("/");

        cy.choiceDay(selectors.navOfDay);

        cy.choiceTime("@textValue", selectors.navHall);
        cy.contains("Забронировать").should("be.disabled");

        seats.forEach(({ row, seat }) => {
            cy.choiceSeat(row, seat);
        });

        cy.contains("Забронировать").should("not.be.disabled").click();
        cy.contains("Вы выбрали билеты:").should("be.visible");
        cy.contains("Получить код бронирования")
            .should("not.be.disabled")
            .should("be.visible");
    });
});
