import explorarPage from '../pages/explorarPage'
import loginPage from '../pages/loginPage'

const { I } = inject()

Given(/^I am logged in VRIM page with user "([^"]*)"$/, (userType) => {
	loginPage.loginStep(userType)
})

Then(/^I navigate to Home Care Section$/, () => {
	explorarPage.navigateToHomeSection()
})

When(
	/^I validate the correct domain in "([^"]*)" with "([^"]*)" and "([^"]*)"$/,
	(caseName, domain, endpoint) => {
		explorarPage.setUpApiInterception(domain, endpoint)
	}
)

When(/^I select a provider's card$/, () => {
	explorarPage.selectProvidersCard()
})

Then(/^I navigate back to Explorar Page$/, () => {
	explorarPage.navigateToExplorarPage()
})

Then(/^I navigate to Red de establecimientos comerciales page$/, () => {
	explorarPage.navigateToRedDeEstablecimientosComerciales()
})

Then(/^I navigate to Citas page$/, () => {
	explorarPage.navigateToCitasPage()
})
