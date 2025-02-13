import { BasePage } from './basePage'

class MonitoreoPage extends BasePage {
	fields: {
		mainContent: {
			seleccionaAlBeneficiario: string
		}
	}

	constructor() {
		super()
		this.fields = {
			mainContent: {
				seleccionaAlBeneficiario:
					'//div[contains(@class, "user-item") and contains(@class, "user-selected")]',
			},
		}
	}
}

export = new MonitoreoPage()
