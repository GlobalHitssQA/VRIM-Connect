import explorarPage from '../pages/explorarPage'
import loginPage from '../pages/loginPage'
import redDeEstablecimientosComercialesPage from '../pages/redDeEstablecimientosComercialesPage'

Given(/^I am logged in VRIM page with user "([^"]*)"$/, (userType) => {
	loginPage.loginStep(userType)
})

Then(/^I navigate to Laboratorios Section$/, () => {
	explorarPage.navigateToLaboratorios()
})

When(
	/^I validate the correct domain in "([^"]*)" call for "([^"]*)"$/,
	async (caseName, domainName) => {
		await explorarPage.setUpApiInterception(caseName, domainName)
	}
)

When(/^I click on a provider card$/, async () => {
	await explorarPage.selectProvidersCard()
})

Then(/^I navigate back to Explorar Page$/, () => {
	explorarPage.navigateToExplorarPage()
})

Then(/^I navigate to Red de establecimientos comerciales page$/, () => {
	explorarPage.navigateToRedDeEstablecimientosComerciales()
})

Then(/^I filter a search by city, state and category$/, () => {
	redDeEstablecimientosComercialesPage.filterSearch()
})

When(/^I navigate to Red medica y TDConsentido$/, () => {
	explorarPage.navigateToRedMedicayTdConsentido()
})
