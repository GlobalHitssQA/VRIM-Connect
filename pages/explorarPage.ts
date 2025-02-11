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
					'(//a[text()[normalize-space()="Explorar"]])[1]',
				planesPageButton:
					'(//a[text()[normalize-space()="Planes"]])[1]',
				citasPageButton: '(//a[text()[normalize-space()="Citas"]])[1]',
				monitoreoPageButton:
					'(//a[text()[normalize-space()="Monitoreo"]])[1]',
				perfilPageButton:
					'(//a[text()[normalize-space()="Perfil"]])[1]',
				farmaciaPageButton:
					'(//a[text()[normalize-space()="Farmacia"]])[1]',
				faqPageButton: '(//a[text()[normalize-space()="FAQ"]])[1]',
				legalesPageButton:
					'(//a[text()[normalize-space()="Legales"]])[1]',
				contactoPageButton:
					'(//a[text()[normalize-space()="Contacto"]])[1]',
				cerrarSesionButton:
					'(//a[text()[normalize-space()="Sesión y cuenta"]])[1]',
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

	async setUpApiInterception() {
		I.waitForVisible(this.fields.header.logoVrim, 10)
		await I.usePlaywrightTo('Interceptar solicitudes', async ({ page }) => {
			await page.route('**/api/BuscadorVrimPalabra', async (route) => {
				const requestUrl = route.request().url()
				I.say(
					'✅ endpoint /BuscadorVrimPalabra detectado correctamente.'
				)
				I.seeTextEquals('**/Wapy_Pymes/api/ListaPalabra', requestUrl)
				route.continue()
			})

			await page.route(
				'**/Wapy_Pymes/api/ListaPalabra',
				async (route) => {
					I.say('✅ endpoint ListaPalabra detectada correctamente.')
					route.continue()
				}
			)
		})
	}

	navigateToHomeSection() {
		I.wait(5000)
		I.waitForVisible(this.fields.floatingChat.chatButton, 20)
		I.click(this.fields.mainContent.homeCareButton)
	}
}

export = new ExplorarPage()
