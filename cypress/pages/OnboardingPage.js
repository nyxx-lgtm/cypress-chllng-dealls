import { OnboardingPageObjects } from '../objects/OnboardingPageObjects'
import { BasePage } from './BasePage'

const onboardingPageObjects = new OnboardingPageObjects()
const basePage = new BasePage()

export class OnboardingPage {
	inputFullName(fullName) {
		onboardingPageObjects.iptFullName.type(fullName)
	}
	selectProfilePicture(profilePicture) {
		onboardingPageObjects.iptProfilePicture.attachFile(profilePicture)
	}
	selectJobSeekingStatus(status) {
		onboardingPageObjects.ddlJobSeekingStatus.click()
		onboardingPageObjects.slctJobSeekingStatus(status).click()
	}
	inputWhatsAppNumber(whatsappNumber) {
		onboardingPageObjects.iptWhatsAppNumber.type(whatsappNumber)
	}
	inputEmail(email) {
		onboardingPageObjects.iptEmail.type(email)
	}
	inputLinkedinURL(linkedinURL) {
		onboardingPageObjects.iptLinkedinURL.type(linkedinURL)
	}
	inputCampus(campus) {
		onboardingPageObjects.iptCampus.type(`${campus}{enter}`)
	}
	selectExperienceLevel(level) {
		onboardingPageObjects.ddlExperienceLevel.click()
		onboardingPageObjects.slctExperienceLevel(level).click()
	}
	clickSkipUploadCV() {
		onboardingPageObjects.btnSkipUploadCV.click()
	}
	inputCompanyName(companyName) {
		cy.wait(3000)
		onboardingPageObjects.iptCompanyName.type(`${companyName}{enter}`)
	}
	inputRoleLevel(roleLevel) {
		onboardingPageObjects.iptRoleLevel.type(`${roleLevel}{enter}`)
	}
	inputRoleName(roleName) {
		onboardingPageObjects.iptRoleName.type(`${roleName}{enter}`)
	}
	inputStartDate(startDate) {
		onboardingPageObjects.iptStartDate.type(startDate)
	}
	inputEndDate(endDate) {
		onboardingPageObjects.iptEndDate.type(endDate)
	}
	checkTermsAndConditions() {
		onboardingPageObjects.chkTermsAndConditions.check()
	}
	clickFinish() {
		onboardingPageObjects.btnFinish.click()
	}
	clickFinishMentor() {
		onboardingPageObjects.btnFinishMentor.click()
	}
	assertCompleteDataSuccess() {
		cy.contains('Complete data success!', { timeout: 10000 }).should(
			'be.visible',
		)
	}
	assertWelcome() {
		cy.contains('Welcome to Dealls!').should('be.visible')
	}
	fillStep1RegisterMentee(data) {
		this.inputFullName(data.fullName)
		basePage.clickNext()
	}
	fillStep2RegisterMentee(data) {
		this.selectProfilePicture(data.profilePicture)
		this.selectJobSeekingStatus(data.jobSeekingStatus)
		this.inputWhatsAppNumber(data.whatsappNumber)
		this.inputEmail(data.email)
		this.inputLinkedinURL(data.linkedinURL)
		this.inputCampus(data.campus)
		this.selectExperienceLevel(data.experienceLevel)
		basePage.clickNext()
	}
	fillStep3RegisterMentee(data) {
		this.clickSkipUploadCV()
		basePage.clickNext()
	}
	fillStep4RegisterMentee(data) {
		this.inputCompanyName(data.companyName)
		this.inputRoleLevel(data.roleLevel)
		this.inputRoleName(data.roleName)
		this.inputStartDate(data.startDate)
		if (data.endDate === 'present') {
			// check checkbox for Present
		} else {
			this.inputEndDate(data.endDate)
		}
		basePage.clickNext()
		basePage.clickNext()
	}
	fillStep5RegisterMentee(data) {
		basePage.clickNext()
	}
	inputPassword(password) {
		onboardingPageObjects.iptPassword.type(password)
	}
	inputConfirmPassword(confirmPassword) {
		onboardingPageObjects.iptConfirmPassword.type(confirmPassword)
	}
	fillStep6RegisterMentee(data) {
		this.inputPassword(data.password)
		this.inputConfirmPassword(data.confirmPassword)
		this.checkTermsAndConditions()
		this.clickFinish()
	}
	inputProfilePictureMentor(profilePicture) {
		onboardingPageObjects.iptProfilePictureMentor.attachFile(profilePicture)
	}
	inputFullNameMentor(fullName) {
		onboardingPageObjects.iptFullNameMentor.type(fullName)
	}
	inputEmailMentor(email) {
		onboardingPageObjects.iptEmailMentor.type(email)
	}
	inputWhatsAppNumberMentor(whatsappNumber) {
		onboardingPageObjects.iptWhatsAppNumberMentor.type(whatsappNumber)
	}
	inputLinkedinURLMentor(linkedinURL) {
		onboardingPageObjects.iptLinkedinURLMentor.type(linkedinURL)
	}
	inputInstagramURLMentor(instagramURL) {
		onboardingPageObjects.iptInstagramURLMentor.type(instagramURL)
	}
	inputInvitationCodeMentor(invitationCode) {
		onboardingPageObjects.iptInvitationCodeMentor.type(invitationCode)
	}
	clickExpertiseMentor(expertise) {
		onboardingPageObjects.btnExpertiseMentor(expertise).click()
	}
	selectMentorExpertise(expertise) {
		cy.wait(1000)
		onboardingPageObjects.ddlMentorExpertise.click()
		onboardingPageObjects.slctMentorExpertise(expertise).click()
	}
	clickSubSkillMentor(subSkill) {
		onboardingPageObjects.chkSubSkillMentor(subSkill).click()
	}
	clickAddOtherSkillMentor(expertise) {
		try {
			console.log('MASUK JUGA')
			onboardingPageObjects.btnAddOtherSkillMentor(expertise).click()
		} catch (error) {
			console.error(
				`Error clicking Add Other Skill for expertise ${expertise}:`,
				error,
			)
		}
	}
	inputCompanyIndustryMentor(companyIndustry) {
		onboardingPageObjects.iptCompanyIndustryMentor.type(
			`${companyIndustry}{enter}`,
		)
	}
	checkStillOccupiedMentor() {
		onboardingPageObjects.chkStillOccupiedMentor.check()
	}
	clickAddOtherExperienceMentor() {
		onboardingPageObjects.btnAddOtherExperienceMentor.click()
	}
	fillStep1RegisterMentor(data) {
		this.inputProfilePictureMentor(data.profilePicture)
		this.inputFullNameMentor(data.fullName)
		this.inputEmailMentor(data.email)
		this.inputWhatsAppNumberMentor(data.whatsappNumber)
		this.inputLinkedinURLMentor(data.linkedinURL)
		this.inputInstagramURLMentor(data.instagramURL)
		this.inputInvitationCodeMentor(data.invitationCode)
		basePage.clickNext()
	}
	fillStep2RegisterMentor(data) {
		data.expertise.forEach((expertise) => {
			this.clickExpertiseMentor(expertise.name)
			expertise.skills.forEach((skill, index) => {
				this.selectMentorExpertise(skill.name)
				skill.subSkills.forEach((subSkill) => {
					this.clickSubSkillMentor(subSkill)
				})
				if (index < expertise.skills.length - 1) {
					this.clickAddOtherSkillMentor(expertise.name)
				}
			})
		})
		basePage.clickNext()
	}
	fillStep3RegisterMentor(data) {
		data.experience.forEach((exp, index) => {
			this.inputCompanyName(exp.companyName)
			this.inputCompanyIndustryMentor(exp.companyIndustry)
			this.inputRoleLevel(exp.roleLevel)
			this.inputRoleName(exp.roleName)
			this.inputStartDate(exp.startDate)
			if (exp.endDate === 'present') {
				this.checkStillOccupiedMentor()
			} else {
				this.inputEndDate(exp.endDate)
			}
			if (index < data.experience.length - 1) {
				this.clickAddOtherExperienceMentor()
			}
		})
		basePage.clickNext()
	}
	inputInstitutionMentor(institutionName) {
		cy.wait(3000)
		onboardingPageObjects.iptInstitutionMentor.type(
			`${institutionName}{enter}`,
		)
	}
	selectInstitutionMentor(institutionName) {
		onboardingPageObjects.slctInstitutionMentor(institutionName).click()
	}
	inputInstituionMajorMentor(major) {
		onboardingPageObjects.iptInstituionMajorMentor.type(`${major}{enter}`)
	}
	fillStep4RegisterMentor(data) {
		data.education.forEach((edu, index) => {
			this.inputInstitutionMentor(edu.institutionName)
			this.selectInstitutionMentor(edu.institutionName)
			this.inputInstituionMajorMentor(edu.institutionMajor)
			this.inputStartDate(edu.startDate)
			this.inputEndDate(edu.endDate)
			if (index < data.education.length - 1) {
				onboardingPageObjects.btnAddOtherEducationMentor.click()
			}
		})
		basePage.clickNext()
	}
	inputAboutMe(aboutMe) {
		onboardingPageObjects.iptAboutMe.type(aboutMe)
	}
	fillStep5RegisterMentor(data) {
		this.inputAboutMe(data.aboutMe)
		basePage.clickNext()
	}
	checkTNCMentor() {
		onboardingPageObjects.chkTNCMentor.check()
	}
	fillStep6RegisterMentor() {
		this.checkTNCMentor()
		basePage.clickNext2()
	}
	inputConfirmPasswordMentor(confirmPassword) {
		onboardingPageObjects.iptConfirmPasswordMentor.type(confirmPassword)
	}
	fillStep7RegisterMentor(data) {
		this.inputPassword(data.password)
		this.inputConfirmPasswordMentor(data.confirmPassword)
		this.checkTermsAndConditions()
		this.clickFinishMentor()
	}
	assertThanksForApplyingAsMentor() {
		cy.contains('Thanks for applying as mentor', { timeout: 10000 }).should('be.visible')
	}
}

export const onboardingPage = new OnboardingPage()
