import { BasePage } from './basePage'

class PlanesPage extends BasePage {
	fields: {
		mainContent: { verPlanButton: string }
	}

	constructor() {
		super()
		this.fields = {
			mainContent: {
				verPlanButton: '//a[text()=" Ver plan "]',
			},
		}
	}
}

export = new PlanesPage()
