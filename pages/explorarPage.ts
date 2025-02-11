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
		}
		floatingChat: {
			chatButton: string
		}
		wallnessSection: {
			wallnessVerMasButton: string
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
				buscarInput:
					'//input[@placeholder="Buscar" and @id="mat-input-2"]',
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
			},
			floatingChat: {
				chatButton: '//button[@aria-label="Abrir Messenger"]',
			},
			wallnessSection: {
				wallnessVerMasButton:
					'//div[@routerlink="busqueda-blog/wellness"]',
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
				console.log(
					'✅ endpoint /BuscadorVrimPalabra detectado correctamente.'
				)
				console.log(requestUrl)
				I.seeTextEquals('**/Wapy_Pymes/api/ListaPalabra', requestUrl)
				route.continue()
			})

			await page.route(
				'**/Wapy_Pymes/api/ListaPalabra',
				async (route) => {
					console.log(
						'✅ endpoint ListaPalabra detectada correctamente.'
					)
					route.continue()
				}
			)
		})
	}

	navigateToHomeSection() {
		I.waitForVisible(this.fields.floatingChat.chatButton, 20)
		I.click(this.fields.mainContent.homeCareButton)
		I.wait(10000)
	}
}

export = new ExplorarPage()
