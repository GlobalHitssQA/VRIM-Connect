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
				categoriaSelect: '//select[option[text()="Especialidades"]]',
				buscarBtn: '//button[text()="Buscar"]',
				firstOptionAppCard: '(//app-card-establecimiento-comercial)[1]',
				direccionData: '//div[text()="Dirección"]',
			},
		}
	}

	async filterSearch(
		estado = 'CIUDAD DE MEXICO',
		municipio = 'BENITO JUAREZ',
		categoria = 'GIMNASIOS'
	) {
		I.waitForVisible(Navbar.header.logoVrim, 10)
		await retryTo(() => {
			I.refreshPage()
			I.selectOption(this.fields.mainContent.estadoSelect, estado)
			I.selectOption(this.fields.mainContent.municipioSelect, municipio)
			I.selectOption(this.fields.mainContent.categoriaSelect, categoria)
			I.click(this.fields.mainContent.buscarBtn)
		}, 4)
	}
}

export = new RedDeEstablecimientosComercialesPage()
