import { LoginPageObjects } from "../objects/LoginPageObjects";
const loginPageObjects = new LoginPageObjects();

export class LoginPage {
    inputEmail(email) {
        loginPageObjects.inputEmail.type(email);
    }

    inputPassword(password) {
        loginPageObjects.inputPassword.type(password);
    }

    clickSignIn() {
        loginPageObjects.btnSignIn.click();
    }

    verifyLoginSuccess() {
        cy.contains("Sign in success").should("be.visible");
    }
}

export const loginPage = new LoginPage();