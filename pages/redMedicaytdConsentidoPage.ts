const { I, Navbar } = inject()

class RedMedicaytdConsentidoPage {
	fields: {
		mainContent: {
			settingsButton: string
			errorMsg: string
		}
	}

	constructor() {
		this.fields = {
			mainContent: {
				settingsButton: '//button[@class="btn vrim-bg-primary"]',
				errorMsg:
					'//div[text()="Se ha producido un error." or text()="Se produjo un error."]',
			},
		}
	}

	async validateMapHasMarkers() {
		I.waitForElement(this.fields.mainContent.settingsButton, 30)
		I.dontSeeElement(this.fields.mainContent.errorMsg)
	}
}

export = new RedMedicaytdConsentidoPage()
