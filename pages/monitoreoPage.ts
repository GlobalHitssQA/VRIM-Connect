class MonitoreoPage {
	fields: {
		mainContent: {
			seleccionaAlBeneficiario: string
		}
	}

	constructor() {
		this.fields = {
			mainContent: {
				seleccionaAlBeneficiario:
					'//div[contains(@class, "user-item") and contains(@class, "user-selected")]',
			},
		}
	}
}

export = new MonitoreoPage()
