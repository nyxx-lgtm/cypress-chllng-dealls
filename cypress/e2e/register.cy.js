import { basePage } from "../pages/BasePage";
import { onboardingPage } from "../pages/OnboardingPage";
import { helper } from "../pages/Helper";

describe("Register", () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit("/mentoring");
    });

    it("Register Mentee with Email", () => {

        /**
         * Created by: Al Khawarismi Atma Pratama
         * Created on: 2025-06-07
         * Updated by: -
         * Updated on: -
         * Summary: 
         * 1. Click on the Register button
         * 2. Click on the Mentee Sign Up with Email button
         * 3. Fill in the registration form with the data
         */

        cy.fixture("registerData").then((data) => {
            data.mentee.whatsappNumber = helper.generateRandom12DigitNumber();
            data.mentee.email = helper.generateRandomYopmailEmail();

            basePage.clickRegister();
            basePage.clickMenteeSignUpWithEmail();

            onboardingPage.fillStep1RegisterMentee(data.mentee);
            onboardingPage.fillStep2RegisterMentee(data.mentee);
            onboardingPage.fillStep3RegisterMentee(data.mentee);
            onboardingPage.fillStep4RegisterMentee(data.mentee);
            onboardingPage.fillStep5RegisterMentee(data.mentee);
            onboardingPage.fillStep6RegisterMentee(data.mentee);

            onboardingPage.assertCompleteDataSuccess();
            onboardingPage.assertWelcome();
        })
    });

    it("Register Mentor with Email", () => {

        /**
         * Created by: Al Khawarismi Atma Pratama
         * Created on: 2025-06-07
         * Updated by: -
         * Updated on: -
         * Summary: 
         * 1. Click on the Register button
         * 2. Click on the Mentor Sign Up with Email button
         * 3. Fill in the registration form with the data
         */

        cy.fixture("registerData").then((data) => {
            data.mentor.whatsappNumber = helper.generateRandom12DigitNumber();
            data.mentor.email = helper.generateRandomYopmailEmail();

            basePage.clickRegister();
            basePage.clickMentorSignUpWithEmail();

            onboardingPage.fillStep1RegisterMentor(data.mentor);
            onboardingPage.fillStep2RegisterMentor(data.mentor);
            onboardingPage.fillStep3RegisterMentor(data.mentor);
            onboardingPage.fillStep4RegisterMentor(data.mentor);
            onboardingPage.fillStep5RegisterMentor(data.mentor);
            onboardingPage.fillStep6RegisterMentor(data.mentor);
            onboardingPage.fillStep7RegisterMentor(data.mentor);

            onboardingPage.assertThanksForApplyingAsMentor(); 
        })
    });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});