import explorarPage from '../pages/explorarPage'
import loginPage from '../pages/loginPage'

<<<<<<< HEAD
=======
const { I } = inject()

>>>>>>> master
Given(/^I am logged in VRIM page with user "([^"]*)"$/, (userType) => {
	loginPage.loginStep(userType)
})

Then(/^I navigate to Laboratorios Section$/, () => {
	explorarPage.navigateToLaboratorios()
})

When(/^I validate the correct domain in "([^"]*)" call$/, (caseName) => {
	explorarPage.setUpApiInterception(caseName)
})

When(/^I click on a provider card$/, () => {
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
