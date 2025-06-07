require('cypress-xpath');

// This file contains the base objects for the website.
export class BaseObjects {
    get btnRegister() {
        return cy.get('#dealls-navbar-register-btn');
    }

    get btnLogin() {
        return cy.get('#dealls-navbar-login-btn');
    }

    get btnMenteeSignUpWithEmail() {
        return cy.xpath(`//*[@alt='Job-Seeker / Mentee']//following::a[1]`);
    }

    get btnMentorSignUpWithEmail() {
        return cy.xpath(`//*[@alt='Mentor']//following::a[1]`);
    }

    get btnNext() {
        return cy.xpath(`//*[.='Selanjutnya']//parent::button`)
    }
    get btnNext2() {
        return cy.xpath(`//*[.='Next']//parent::button`);
    }
}