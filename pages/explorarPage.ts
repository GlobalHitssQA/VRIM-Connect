import assert from 'assert'

const { I } = inject()

class ExplorarPage {
	fields: {
		header: {
			logoVrim: string
			avatarPorfileButton: string
			buscarInput: string
		}
		sidebar: {
			explorarPageButton: string
			planesPageButton: string
			citasPageButton: string
			monitoreoPageButton: string
			perfilPageButton: string
			farmaciaPageButton: string
			faqPageButton: string
			legalesPageButton: string
			contactoPageButton: string
			cerrarSesionButton: string
		}
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
		expectedEndPoints: {
			buscadorEndpoint: string
			listaPalabraEndPoint: string
		}
	}

	constructor() {
		this.fields = {
			header: {
				logoVrim: '//img[@alt="logo vrim"]',
				avatarPorfileButton:
					'(//img[contains(@class, "1img_rounded") and contains(@src, "no-avatar.png")])[3]',
				buscarInput: '(//input[@placeholder="Buscar"])[3]',
			},
			sidebar: {
				explorarPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Explorar"]]',
				planesPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Planes"]]',
				citasPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Citas"]]',
				monitoreoPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Monitoreo"]]',
				perfilPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Perfil"]]',
				farmaciaPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Farmacia"]]',
				faqPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="FAQ"]]',
				legalesPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Legales"]]',
				contactoPageButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Contacto"]]',
				cerrarSesionButton:
					'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a[text()[normalize-space()="Sesión y cuenta"]]',
			},
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
			expectedEndPoints: {
				buscadorEndpoint: '/Api/VrimConnect/Buscador',
				listaPalabraEndPoint: '//Wapy_Pymes/api/ListaPalabra',
			},
		}
	}

	setUpApiInterception(domain, endpoint) {
		this.validateNavigation(domain, endpoint)
	}

	navigateToHomeSection() {
		I.waitForVisible(this.fields.header.logoVrim, 10)
		I.waitForVisible(this.fields.floatingChat.chatButton, 20)
		I.click(this.fields.mainContent.homeCareButton)
	}

	navigateToRedDeEstablecimientosComerciales() {
		I.waitForVisible(this.fields.header.logoVrim, 10)
		I.waitForVisible(this.fields.floatingChat.chatButton, 20)
		I.click(this.fields.mainContent.redDeEstabComercialesButton)
	}

	navigateToExplorarPage() {
		I.waitForVisible(this.fields.header.logoVrim, 10)
		I.click(this.fields.sidebar.explorarPageButton)
	}

	selectProvidersCard() {
		I.waitForVisible(this.fields.header.logoVrim, 10)
	}

	navigateToCitasPage() {
		I.waitForVisible(this.fields.header.logoVrim, 10)
		I.click(this.fields.sidebar.citasPageButton)
		I.wait(1000)
	}

	// eslint-disable-next-line class-methods-use-this
	validateNavigation(domain: string, endpoint: string) {
		I.waitForResponse(
			(response) =>
				response.url() === `${domain}${endpoint}` &&
				response.status() === 200,
			10
		)
	}
}

export = new ExplorarPage()
