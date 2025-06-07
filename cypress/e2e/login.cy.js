import { basePage } from "../pages/BasePage";
import { loginPage } from "../pages/LoginPage";

describe("Login", () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit("/mentoring");
    });

    it("Login Mentee with Email", () => {

        /**
         * Created by: Al Khawarismi Atma Pratama
         * Created on: 2025-06-07
         * Updated by: -
         * Updated on: -
         * Summary: 
         * 1. Click on the Login button
         * 2. Fill in the login form with the data
         */

        cy.fixture("user").then((data) => {
            basePage.clickLogin();
            loginPage.inputEmail(data.mentee.email);
            loginPage.inputPassword(data.mentee.password);
            loginPage.clickSignIn();
        });
    });

    it("Login Mentor with Email", () => {

        /**
         * Created by: Al Khawarismi Atma Pratama
         * Created on: 2025-06-07
         * Updated by: -
         * Updated on: -
         * Summary: 
         * 1. Click on the Login button
         * 2. Fill in the login form with the data
         */

        cy.fixture("user").then((data) => {
            basePage.clickLogin();
            loginPage.inputEmail(data.mentor.email);
            loginPage.inputPassword(data.mentor.password);
            loginPage.clickSignIn();
        });
    });
});