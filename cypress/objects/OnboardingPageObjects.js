require('cypress-xpath');

export class OnboardingPageObjects {
    get iptFullName() {
        return cy.get('#fullName');
    }
    get iptProfilePicture() {
        return cy.get('#profilePictURL');
    }
    get ddlJobSeekingStatus() {
        return cy.xpath(`//*[@id='jobSearchStatus']//parent::span`);
    }
    slctJobSeekingStatus(name) {
        return cy.get(`div[name="${name}"]`);
    }
    get iptWhatsAppNumber() {
        return cy.get('#whatsapp');
    }
    get iptEmail() {
        return cy.get('#email');
    }
    get iptLinkedinURL() {
        return cy.get('#linkedInUrl');
    }
    get iptCampus() {
        return cy.get('#campus');
    }
    get ddlExperienceLevel() {
        return cy.xpath(`//*[@id='eligibility']//parent::span`);
    }
    slctExperienceLevel(level) {
        return cy.get(`div[title="${level}"]`);
    }
    get btnSkipUploadCV() {
        return cy.xpath(`//*[.='Skip for now, my CV is not ready']//parent::button`)
    }
    get iptCompanyName() {
        return cy.xpath(`(//*[@id='companyName'])[last()]`);
    }
    get iptRoleLevel() {
        return cy.xpath(`(//*[@id='roleLevel'])[last()]`);
    }
    get iptRoleName() {
        return cy.xpath(`(//*[@id='roleName'])[last()]`);
    }
    get iptStartDate() {
        return cy.xpath(`(//*[@id='startDate'])[last()]`);
    }
    get iptEndDate() {
        return cy.xpath(`(//*[@id='endDate'])[last()]`);
    }
    get iptPassword() {
        return cy.get('#password');
    }
    get iptConfirmPassword() {
        return cy.get('#passwordConfirmation');
    }
    get chkTermsAndConditions() {
        return cy.get('#checkPrivacyPolicy');
    }
    get btnFinish() {
        return cy.get('#dealls-onboarding-finish');
    }
    get iptProfilePictureMentor() {
        return cy.get('#mentor-onboarding_profilePictURL')
    }
    get iptFullNameMentor() {
        return cy.get('#mentor-onboarding_fullName');
    }
    get iptEmailMentor() {
        return cy.get('#mentor-onboarding_email');
    }
    get iptWhatsAppNumberMentor() {
        return cy.get('#mentor-onboarding_whatsapp');
    }
    get iptLinkedinURLMentor() {
        return cy.get('#mentor-onboarding_linkedInUrl');
    }
    get iptInstagramURLMentor() {
        return cy.get('#mentor-onboarding_instagramUrl');
    }
    get iptInvitationCodeMentor() {
        return cy.get('#mentor-onboarding_invitationCode');
    }
    btnExpertiseMentor(expertise) {
        return cy.xpath(`//*[@alt='${expertise}']//ancestor::button`);
    }
    get ddlMentorExpertise() {
        return cy.xpath(`(//*[starts-with(@id, 'expertise-list-form') and (substring(@id, string-length(@id) - string-length('category') + 1) = 'category')]//parent::span)[last()]`);
    }
    slctMentorExpertise(expertise) {
        return cy.xpath(`(//div[text()='${expertise}'])[last()]`);
    }
    chkSubSkillMentor(subSkill) {
        return cy.contains(subSkill);
    }
    btnAddOtherSkillMentor(expertise) {
        return cy.xpath(`//*[@alt='${expertise}']/ancestor::div[7]/following-sibling::div//span[text()='Tambah keahlian lain']`);
    }
    get iptCompanyIndustryMentor() {
        return cy.xpath(`//*[.='Pilih industri perusahaan']//parent::span//input`).last();
    }
    get chkStillOccupiedMentor() {
        return cy.xpath(`//*[@id='currentlyOccupied']//input`).last();
    }
    get btnAddOtherExperienceMentor() {
        return cy.contains('Tambahkan pengalaman lain');
    }
    get iptInstitutionMentor() {
        return cy.xpath(`(//*[@id='institution'])[last()]`);
    }
    slctInstitutionMentor(instituionName) {
        return cy.contains(instituionName).last();
    }
    get iptInstituionMajorMentor() {
        return cy.xpath(`(//*[@id='major'])[last()]`);
    }
    get btnAddOtherEducationMentor() {
        return cy.contains('Tambah pendidikan lain');
    }
    get iptAboutMe() {
        return cy.get('#aboutMe');
    }
    get chkTNCMentor() {
        return cy.xpath(`//*[@id='linkedInChoices']//input`);
    }
    get iptConfirmPasswordMentor() {
        return cy.get('#confirmPassword');
    }
    get btnFinishMentor() {
        return cy.get('#mentoring-onboarding-finish-btn');
    }
}