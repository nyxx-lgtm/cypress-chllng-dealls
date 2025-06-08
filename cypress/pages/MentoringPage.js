import { MentoringPageObjects } from '../objects/MentoringPageObjects'
import { BasePage } from './BasePage'
const mentoringPageObjects = new MentoringPageObjects()
const basePage = new BasePage()

export class MentoringPage {
	inputSearchMentor(keyword) {
		cy.wait(1000)
		mentoringPageObjects.iptSearchMentor.type(`${keyword}{enter}`)
		cy.wait(2000)
	}
	verifyMentorSearchResult(keyword) {
		cy.contains(keyword).should('be.visible')
	}
	clickMentorCard(mentorName) {
		mentoringPageObjects.crdMentor(mentorName).click()
		cy.wait(2000)
	}
	verifyMentorDetails(mentorName) {
		cy.contains(mentorName).should('be.visible')
	}
	clickRequestScheduleButton() {
		mentoringPageObjects.btnRequestSchedule.click()
	}
	fillStep1RequestSchedule(topic) {
		mentoringPageObjects.btnTopic(topic).click()
	}
	fillStep2RequestSchedule(
		month,
		year,
		startDay,
		endDay,
		startTime,
		endTime,
		locations,
		description,
	) {
		const monthMap = {
			January: 1,
			February: 2,
			March: 3,
			April: 4,
			May: 5,
			June: 6,
			July: 7,
			August: 8,
			September: 9,
			October: 10,
			November: 11,
			December: 12,
		}

		const expectedMonth = monthMap[month]
		const expectedYear = parseInt(year)

		function adjustYearAndMonth() {
			mentoringPageObjects.txtYearDatePicker
				.invoke('text')
				.then((yearText) => {
					const currentYear = parseInt(yearText.trim(), 10)

					if (currentYear < expectedYear) {
						mentoringPageObjects.btnArrowRightDatePicker.click()
						adjustYearAndMonth()
					} else if (currentYear > expectedYear) {
						mentoringPageObjects.btnArrowLeftDatePicker.click()
						adjustYearAndMonth()
					} else {
						mentoringPageObjects.txtMonthDatePicker
							.invoke('text')
							.then((monthText) => {
								const currentMonth = monthMap[monthText.trim()]
								if (currentMonth < expectedMonth) {
									mentoringPageObjects.btnArrowRightDatePicker.click()
									adjustYearAndMonth()
								} else if (currentMonth > expectedMonth) {
									mentoringPageObjects.btnArrowLeftDatePicker.click()
									adjustYearAndMonth()
								} else {
									cy.log(
										`Month and Year matched: ${month} ${year}`,
									)
								}
							})
					}
				})
		}

		mentoringPageObjects.datePicker.click()
		adjustYearAndMonth()
		mentoringPageObjects.btnDayDatePicker(startDay).click()
		mentoringPageObjects.btnDayDatePicker(endDay).click()
		mentoringPageObjects.iptStartTime.type(startTime)
		mentoringPageObjects.iptEndTime.type(endTime)
		mentoringPageObjects.iptProposeLocation.then(($el) => {
			const isDisabled = $el.is(':disabled')
			if (!isDisabled) {
                locations.forEach((location) => {
                    mentoringPageObjects.iptProposeLocation.click()
                    mentoringPageObjects.txtProposeLocation(location).click()
                });
			}
		})
		mentoringPageObjects.iptDescription.clear().type(description)
		basePage.clickNext()
	}
	fillStep3RequestSchedule() {
		mentoringPageObjects.chkCommitment.check()
		mentoringPageObjects.btnFinishRequestSchedule.click()
	}
	verifyRequestScheduleSuccess() {
		mentoringPageObjects.txtSuccessRequestSchedule.should('be.visible')
	}
}

export const mentoringPage = new MentoringPage()
