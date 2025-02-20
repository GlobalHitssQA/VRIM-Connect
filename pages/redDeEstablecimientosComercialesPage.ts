const { I, Navbar } = inject()

class RedDeEstablecimientosComercialesPage {
	fields: {
		mainContent: {
			estadoSelect: string
			municipioSelect: string
			categoriaSelect: string
			buscarBtn: string
			firstOptionAppCard: string
			direccionData: string
		}
	}

	constructor() {
		this.fields = {
			mainContent: {
				estadoSelect: '//select[option[text()="Estado"]]',
				municipioSelect: '//select[option[text()="Municipio"]]',
				categoriaSelect: '//select[option[text()="Categorias"]]',
				buscarBtn: '//button[text()="Buscar"]',
				firstOptionAppCard: '(//app-card-establecimiento-comercial)[1]',
				direccionData: '//div[text()="Dirección"]',
			},
		}
	}

	// eslint-disable-next-line class-methods-use-this
	filterSearch() {
		I.waitForVisible(Navbar.header.logoVrim, 10)
		I.selectOption(this.fields.mainContent.estadoSelect, 'CIUDAD DE MEXICO')
		I.selectOption(this.fields.mainContent.municipioSelect, 'BENITO JUAREZ')
		I.selectOption(this.fields.mainContent.categoriaSelect, 'GIMNASIOS')
		I.click(this.fields.mainContent.buscarBtn)
		I.waitForElement(this.fields.mainContent.firstOptionAppCard, 10)
		I.click(this.fields.mainContent.firstOptionAppCard)
		I.waitForElement(this.fields.mainContent.direccionData)
	}
}

export = new RedDeEstablecimientosComercialesPage()
