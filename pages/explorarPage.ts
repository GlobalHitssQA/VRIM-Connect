import { config } from '../utils/config'
<<<<<<< HEAD

const { I, Fragment } = inject()
=======
import { BasePage } from './basePage'

const { I } = inject()
>>>>>>> master

const { expectedStatusCodes } = config

const endpoints = {
	buscadorVrim: '/Api/VrimConnect/Buscador',
	wapyListaPalabra: '/Wapy_Pymes/api/ListaPalabra',
	Cupones: '/APIMovilesSI/Api/Cupones',
	Especialidades: '/APIMovilesSI/Api/VrimConnect/Especialidades',
	vrimListaPalabra: '/APIMovilesSI/Api/VrimConnect/ListaPalabra',
	Combos: '/APIMovilesSI/Api/Combos',
	Mapa: '/Api/VrimConnect/Mapa',
}

<<<<<<< HEAD
class ExplorarPage {
=======
class ExplorarPage extends BasePage {
>>>>>>> master
	fields: {
		mainContent: {
			farmaciaButton: string
			miExpedienteDeSaludButton: string
			laboratoriosButton: string
			opticasButton: string
			dentalButton: string
			homeCareButton: string
			encuentraEspecialistaButton: string
			agendaConsultaButton: string
			referenciasMedicasVerMasButton: string
			redDeEstabComercialesButton: string
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
<<<<<<< HEAD
=======
		super()
>>>>>>> master
		this.fields = {
			mainContent: {
				farmaciaButton:
					'//div[contains(@class, "card") and .//span[text()="Farmacia"]]',
				miExpedienteDeSaludButton: '//div[@routerlink="/vrim/perfil"]',
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

	setUpApiInterception(caseName) {
		const endpoint = endpoints[caseName]
		const domain = config.DOMAIN
		this.validateNavigation(domain, endpoint)
	}

	navigateToLaboratorios() {
<<<<<<< HEAD
		I.waitForVisible(Fragment.header.logoVrim, 10)
=======
		I.waitForVisible(this.baseFields.header.logoVrim, 10)
>>>>>>> master
		I.waitForVisible(this.fields.floatingChat.chatButton, 20)
		I.click(this.fields.mainContent.laboratoriosButton)
	}

	navigateToRedDeEstablecimientosComerciales() {
<<<<<<< HEAD
		I.waitForVisible(Fragment.header.logoVrim, 10)
=======
		I.waitForVisible(this.baseFields.header.logoVrim, 10)
>>>>>>> master
		I.waitForVisible(this.fields.floatingChat.chatButton, 20)
		I.click(this.fields.mainContent.redDeEstabComercialesButton)
	}

<<<<<<< HEAD
	// eslint-disable-next-line class-methods-use-this
	navigateToExplorarPage() {
		I.waitForVisible(Fragment.header.logoVrim, 10)
		I.click(Fragment.sidebar.explorarPageButton)
	}

	// eslint-disable-next-line class-methods-use-this
	selectProvidersCard() {
		I.waitForVisible(Fragment.header.logoVrim, 10)
	}

	// eslint-disable-next-line class-methods-use-this
	navigateToCitasPage() {
		I.waitForVisible(Fragment.header.logoVrim, 10)
		I.click(Fragment.sidebar.citasPageButton)
=======
	navigateToExplorarPage() {
		I.waitForVisible(this.baseFields.header.logoVrim, 10)
		I.click(this.baseFields.sidebar.explorarPageButton)
	}

	selectProvidersCard() {
		I.waitForVisible(this.baseFields.header.logoVrim, 10)
	}

	navigateToCitasPage() {
		I.waitForVisible(this.baseFields.header.logoVrim, 10)
		I.click(this.baseFields.sidebar.citasPageButton)
>>>>>>> master
	}

	// eslint-disable-next-line class-methods-use-this
	validateNavigation(domain: string, endpoint: string) {
		I.waitForResponse(
			(response) =>
				response.url() === `${domain}${endpoint}` &&
				response.status() === (expectedStatusCodes[endpoint] || 200),
			10
		)
	}
}

export = new ExplorarPage()
