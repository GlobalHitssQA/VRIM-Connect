/* eslint-disable */
/// <reference types='codeceptjs' />
type steps_file = () => {
	setGeolocation: (location: {
		latitude: number
		longitude: number
		accuracy: number
	}) => Promise<{ latitude: number; longitude: number; accuracy: number }>
}
type loginPage = typeof import('./pages/loginPage')
type Navbar = typeof import('./pages/fragments/Navbar.js')
type PlaywrightVideoAllure =
	typeof import('./utils/playwrightVideoAllure_helper')
type DbHelper = import('./node_modules/codeceptjs-dbhelper')
type ResembleHelper = import('codeceptjs-resemblehelper')
type ChaiWrapper = import('codeceptjs-chai')

declare namespace CodeceptJS {
	interface SupportObject {
		I: I
		current: any
		loginPage: loginPage
		Navbar: Navbar
	}
	interface Methods
		extends Playwright,
			PlaywrightVideoAllure,
			REST,
			GraphQL,
			DbHelper,
			ResembleHelper,
			ChaiWrapper {}
	interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
	namespace Translation {
		interface Actions {}
	}
}
