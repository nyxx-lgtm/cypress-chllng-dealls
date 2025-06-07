export class LoginPageObjects {
    get inputEmail() {
        return cy.get('#basic_email');
    }

    get inputPassword() {
        return cy.get('#basic_password');
    }

    get btnSignIn() {
        return cy.get('button').contains('Sign In');
    }
}