<<<<<<< HEAD
class MonitoreoPage {
=======
import { BasePage } from './basePage'

class MonitoreoPage extends BasePage {
>>>>>>> master
	fields: {
		mainContent: {
			seleccionaAlBeneficiario: string
		}
	}

	constructor() {
<<<<<<< HEAD
=======
		super()
>>>>>>> master
		this.fields = {
			mainContent: {
				seleccionaAlBeneficiario:
					'//div[contains(@class, "user-item") and contains(@class, "user-selected")]',
			},
		}
	}
}

export = new MonitoreoPage()
