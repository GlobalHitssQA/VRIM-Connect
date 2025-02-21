import { config } from '../utils/config'

const { I, Navbar } = inject()

const { expectedStatusCodes } = config

const endpoints = {
	buscadorVrim: '/APIMovilesSI/Api/Buscador',
	wapyListaPalabra: '/api/BuscadorVrimPalabra',
	cupones: '/APIMovilesSI/Api/Cupones',
	especialidades: '/api/BuscadorEspecialidades',
	vrimListaPalabra: '/APIMovilesSI/Api/VrimConnect/ListaPalabra',
	combos: '/APIMovilesSI/Api/Combos',
	buscadorRed: '/api/BuscadorRed',
	mapa: '/APIMovilesSI/Api/Mapa',
	token: '/apitoken/api/token',
}

class ExplorarPage {
	fields: {
		mainContent: {
			farmaciaButton: string
			miExpedienteDeSaludButton: string
			redMedicayTdConsentidoBtn: string
			laboratoriosButton: string
			opticasButton: string
			dentalButton: string
			homeCareButton: string
			encuentraEspecialistaButton: string
			agendaConsultaButton: string
			referenciasMedicasVerMasButton: string
			redDeEstabComercialesButton: string
			firstCardOption: string
			loader: string
		}
		floatingChat: {
			chatButton: string
		}
		wellnessSection: {
			wellnessVerMasButton: string
			wellnessVideoUno: string
			wellnessVideoDos: string
			wellnessVideoTres: string
		}
		blogSection: {
			blogVerMasButton: string
			blogVideoUno: string
			blogVideoDos: string
			blogVideoTres: string
		}
		loMasRecienteSection: {
			loMasRecienteVerMasButton: string
			loMasRecienteVideoUno: string
			loMasRecienteVideoDos: string
			loMasRecienteVideoTres: string
		}
		suscriptionModal: { beneficiosMessage: string; descartarButton: string }
	}

	constructor() {
		this.fields = {
			mainContent: {
				farmaciaButton:
					'//div[contains(@class, "card") and .//span[text()="Farmacia"]]',
				miExpedienteDeSaludButton: '//div[@routerlink="/vrim/perfil"]',
				redMedicayTdConsentidoBtn:
					'//span[text()="Red médica y TDConsentido"]',
				laboratoriosButton: '//span[text()="Laboratorios"]',
				opticasButton: '//span[text()="Ópticas"]',
				dentalButton: '//span[text()="Dental"]',
				homeCareButton: '//span[text()="Home Care"]',
				encuentraEspecialistaButton:
					'//span[text()="Encuentra un especialista de terapia emocional"]',
				agendaConsultaButton:
					'//div[@class="card border-0 w-100 item-agendar cursor-pointer"]',

				referenciasMedicasVerMasButton:
					'//div[h6[text()[normalize-space()="Referencias médicas"]]]//div[text()[normalize-space()="Ver más"]]',
				redDeEstabComercialesButton:
					'//span[text()="Red de establecimientos comerciales"]',
				firstCardOption: '(//div[@class="card-body"])[1]',
				loader: '//span[text()="Loading..."]',
			},
			floatingChat: {
				chatButton: '//button[@aria-label="Abrir Messenger"]',
			},
			wellnessSection: {
				wellnessVerMasButton:
					'//div[@routerlink="busqueda-blog/wellness"]',
				wellnessVideoUno: '(//a//span[@class="blog-title"])[1]',
				wellnessVideoDos: '(//a//span[@class="blog-title"])[2]',
				wellnessVideoTres: '(//a//span[@class="blog-title"])[3]',
			},
			blogSection: {
				blogVerMasButton: '//div[@routerlink="busqueda-blog/blog"]',
				blogVideoUno: '(//a//span[@class="blog-title"])[4]',
				blogVideoDos: '(//a//span[@class="blog-title"])[5]',
				blogVideoTres: '(//a//span[@class="blog-title"])[6]',
			},
			loMasRecienteSection: {
				loMasRecienteVerMasButton:
					'//div[@routerlink="busqueda-blog/reciente"]',
				loMasRecienteVideoUno: '(//a//span[@class="blog-title"])[7]',
				loMasRecienteVideoDos: '(//a//span[@class="blog-title"])[8]',
				loMasRecienteVideoTres: '(//a//span[@class="blog-title"])[9]',
			},
			suscriptionModal: {
				beneficiosMessage:
					'//span[text()="Consigue mejores beneficios al suscribirte"]',
				descartarButton: '//button[text()=" Descartar "]',
			},
		}
	}

	setUpApiInterception(caseName: keyof typeof endpoints) {
		const endpoint = endpoints[caseName]
		const domain = config.DOMAIN
		this.validateNavigation(domain, endpoint)
	}

	navigateToLaboratorios() {
		I.waitForVisible(Navbar.header.logoVrim, 10)
		I.click(this.fields.mainContent.laboratoriosButton)
	}

	async navigateToRedDeEstablecimientosComerciales() {
		I.waitForVisible(Navbar.header.logoVrim, 10)
		I.click(this.fields.mainContent.redDeEstabComercialesButton)
	}

	// eslint-disable-next-line class-methods-use-this
	navigateToExplorarPage() {
		I.waitForVisible(Navbar.header.logoVrim, 10)
		I.click(Navbar.sidebar.explorarPageButton)
	}

	selectProvidersCard() {
		I.waitForElement(this.fields.mainContent.firstCardOption, 10)
		I.click(this.fields.mainContent.firstCardOption)
	}

	async navigateToRedMedicayTdConsentido() {
		I.waitForVisible(Navbar.header.logoVrim, 10)
		I.click(this.fields.mainContent.redMedicayTdConsentidoBtn)
	}

	// eslint-disable-next-line class-methods-use-this
	validateNavigation(domain: string, endpoint: string) {
		I.waitForResponse(
			(response) =>
				response.url().includes(`${domain}${endpoint}`) &&
				response.status() === (expectedStatusCodes[endpoint] || 200),
			10
		)
	}
}

export = new ExplorarPage()
