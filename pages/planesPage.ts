class PlanesPage {
	fields: {
		mainContent: { verPlanButton: string }
	}

	constructor() {
		this.fields = {
			mainContent: {
				verPlanButton: '//a[text()=" Ver plan "]',
			},
		}
	}
}

export = new PlanesPage()
