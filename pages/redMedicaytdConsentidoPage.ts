const { I, Navbar } = inject()

class RedMedicaytdConsentidoPage {
	fields: {
		mainContent: {
			settingsButton: string
			errorMsg: string
			map: string
			mapMark: string
		}
	}

	constructor() {
		this.fields = {
			mainContent: {
				settingsButton: '//button[@class="btn vrim-bg-primary"]',
				errorMsg:
					'//div[text()="Se ha producido un error." or text()="Se produjo un error."]',
				map: '//div[@id="map"]',
				mapMark: '//map[@name="gmimap1"]',
			},
		}
	}

	validateMapLoadsWithoutErrors() {
		I.waitForElement(this.fields.mainContent.settingsButton, 30)
		I.dontSeeElement(this.fields.mainContent.errorMsg)
		I.waitForElement(this.fields.mainContent.map, 20)
		I.waitForVisible(this.fields.mainContent.mapMark)
	}
}

export = new RedMedicaytdConsentidoPage()
