import { BaseObjects } from '../objects/BaseObjects'
const baseObjects = new BaseObjects()

export class BasePage {
	clickRegister() {
		baseObjects.btnRegister.click()
		cy.wait(3000)
	}
	clickLogin() {
		baseObjects.btnLogin.click()
	}
	clickMenteeSignUpWithEmail() {
		baseObjects.btnMenteeSignUpWithEmail.click()
	}
	clickMentorSignUpWithEmail() {
		baseObjects.btnMentorSignUpWithEmail.click()
	}
	clickNext() {
		baseObjects.btnNext.then(($el) => {
			baseObjects.btnNext.click()
		})
	}
	clickNext2() {
		baseObjects.btnNext2.click()
	}
}

export const basePage = new BasePage()
