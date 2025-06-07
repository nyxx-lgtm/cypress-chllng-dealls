require('cypress-xpath');

export class MentoringPageObjects {
    get iptSearchMentor() {
        return cy.get('#searchMentor');
    }
    crdMentor(mentorName) {
        return cy.contains(mentorName);
    }
    get btnRequestSchedule() {
        return cy.get('.mt-3');
    }
    btnTopic(topic) {
        return cy.xpath(`//*[.='${topic}']//ancestor::button`)
    }
    get datePicker() {
        return cy.get('.rmdp-container > :nth-child(1) > .h-9');
    }
    get txtMonthDatePicker() {
        return cy.xpath(`//*[@class='rmdp-header-values']//span[1]`);
    }
    get txtYearDatePicker() {
        return cy.xpath(`//*[@class='rmdp-header-values']//span[3]`);
    }
    get btnArrowRightDatePicker() {
        return cy.xpath(`//*[@class='rmdp-arrow-container rmdp-right ']`);
    }
    get btnArrowLeftDatePicker() {
        return cy.xpath(`//*[@class='rmdp-arrow-container rmdp-left ']`);
    }
    btnDayDatePicker(day) {
        return cy.xpath(`//*[contains(@aria-label, '${day}')]`);
    }
    get iptStartTime() {
        return cy.get('#proposedTimes_0_startTime');
    }
    get iptEndTime() {
        return cy.get('#proposedTimes_0_endTime');
    }
    get iptDescription() {
        return cy.get('#notes');
    }
    get chkCommitment() {
        return cy.get('#commitCheckbox');
    }
    get btnFinishRequestSchedule() {
        return cy.get('#mentoring-schedule-finish-request-session-btn')
    }
    get txtSuccessRequestSchedule() {
        return cy.contains('Sesi mentoring kamu telah dikirimkan!')
    }
    get iptProposeLocation() {
        return cy.get('#proposeLocation')
    }
    txtProposeLocation(location) {
        return cy.xpath(`(//*[.='${location}'])[last()]`)
    }
}