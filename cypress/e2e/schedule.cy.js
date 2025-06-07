import { basePage } from '../pages/BasePage'
import { loginPage } from '../pages/LoginPage'
import { mentoringPage } from '../pages/MentoringPage'

describe('Schedule', () => {
	beforeEach(() => {
		cy.viewport(1280, 720)
		cy.visit('/mentoring')
	})

	it('as mentee, I can request a mentoring session', () => {
		/**
		 * Created by: Al Khawarismi Atma Pratama
		 * Created on: 2025-06-08
		 * Updated by: -
		 * Updated on: -
		 * Summary:
		 * 1. Login as a mentee
		 * 2. Search for a mentor
		 * 3. Click on the mentor card
		 * 4. Click on the "Request Schedule" button
		 * 5. Fill in the schedule request form with the data
		 * 6. Submit the schedule request form
		 */

		basePage.clickLogin()

		cy.fixture('user').then((data) => {
			loginPage.inputEmail(data.mentee.email)
			loginPage.inputPassword(data.mentee.password)
			loginPage.clickSignIn()
			loginPage.verifyLoginSuccess()
		})

		cy.fixture('reqSchedule').then((data) => {
			mentoringPage.inputSearchMentor(data.mentorName)
			mentoringPage.verifyMentorSearchResult(data.mentorName)
			mentoringPage.clickMentorCard(data.mentorName)
			mentoringPage.verifyMentorDetails(data.mentorName)
			mentoringPage.clickRequestScheduleButton()
			data.topics.forEach((topic) => {
				mentoringPage.fillStep1RequestSchedule(topic)
			})
            basePage.clickNext();
			mentoringPage.fillStep2RequestSchedule(
				data.dateRange.month,
				data.dateRange.year,
				data.dateRange.startDay,
				data.dateRange.endDay,
				data.timeRange.startTime,
				data.timeRange.endTime,
				data.locations,
				data.description,
			)
            mentoringPage.fillStep3RequestSchedule()
            mentoringPage.verifyRequestScheduleSuccess()
		})
	})
})

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});