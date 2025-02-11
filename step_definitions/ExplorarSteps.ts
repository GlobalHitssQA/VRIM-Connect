import explorarPage from '../pages/explorarPage'
import loginPage from '../pages/loginPage'

const { I } = inject()

Given(/^I am logged in VRIM page$/, () => {
	loginPage.loginStep()
})

When(/^I set up the API interception$/, async () => {
	await explorarPage.setUpApiInterception()
})

Then(/^I navigate to Home Section$/, () => {
	explorarPage.navigateToHomeSection()
})
