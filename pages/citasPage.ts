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
			nombreDelUusuario: string
			fechaDeNacimiento: string
			sexoDeNacimiento: string
			curp: string
			rfc: string
			miPlanButton: string
			beneficiariosButton: string
			beneficiariosRegistradosInput: string
			beneficiariosDisponiblesInput: string
		}

		suscriptionModal: { beneficiosMessage: string; descartarButton: string }
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
				nombreDelUusuario: '//p[@class="fs-6 fw-normal"]',
				fechaDeNacimiento: '//input[@id="mat-input-9"]',
				sexoDeNacimiento: '//input[@id="mat-input-10"]',
				curp: '//input[@id="mat-input-11"]',
				rfc: '//input[@id="mat-input-12"]',
				miPlanButton: '//button[@class="btn1 btn5 fw-normal"]',
				beneficiariosButton:
					'//button[contains(text(), "Beneficiarios")]',
				beneficiariosRegistradosInput:
					'//input[@placeholder="Beneficiarios registrados"]',
				beneficiariosDisponiblesInput:
					'//input[@placeholder="Beneficiarios disponibles"]',
			},

			suscriptionModal: {
				beneficiosMessage:
					'//span[text()="Consigue mejores beneficios al suscribirte"]',
				descartarButton: '//button[text()=" Descartar "]',
			},
		}
	}

	openCitasPages() {
		I.waitForVisible(this.fields.header.logoVrim)
		I.wait(1000)
	}
}

export = new ExplorarPage()
