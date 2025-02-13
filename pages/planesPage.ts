<<<<<<< HEAD
class PlanesPage {
=======
import { BasePage } from './basePage'

class PlanesPage extends BasePage {
>>>>>>> master
	fields: {
		mainContent: { verPlanButton: string }
	}

	constructor() {
<<<<<<< HEAD
=======
		super()
>>>>>>> master
		this.fields = {
			mainContent: {
				verPlanButton: '//a[text()=" Ver plan "]',
			},
		}
	}
}

export = new PlanesPage()
