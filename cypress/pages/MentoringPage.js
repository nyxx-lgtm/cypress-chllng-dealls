import { MentoringPageObjects } from "../objects/MentoringPageObjects";
const mentoringPageObjects = new MentoringPageObjects();

export class MentoringPage {
    inputSearchMentor(keyword) {
        mentoringPageObjects.iptSearchMentor.type(`${keyword}{enter}`);
        cy.wait(2000);
    }
    verifyMentorSearchResult(keyword) {
        cy.contains(keyword).should('be.visible');
    }
    clickMentorCard(mentorName) {
        mentoringPageObjects.crdMentor(mentorName).click();
        cy.wait(2000);
    }
    verifyMentorDetails(mentorName) {
        cy.contains(mentorName).should('be.visible');
    }
}

export const mentoringPage = new MentoringPage();