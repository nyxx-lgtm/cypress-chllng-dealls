require('cypress-xpath');

export class MentoringPageObjects {
    get iptSearchMentor() {
        return cy.get('#searchMentor');
    }
    crdMentor(mentorName) {
        return cy.contains(mentorName);
    }
}