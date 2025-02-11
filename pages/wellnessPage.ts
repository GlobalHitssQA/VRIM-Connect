const { I } = inject()

class WellnessPage {
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
			wellnessVideoUno: string
			wellnessVideoDos: string
			wellnessVideoTres: string
		}
		loMasVisto: {
			loMasVistoVideoUno: string
			loMasVistoVideoDos: string
			loMasVistoVideoTres: string
			verMasButton: string
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
				wellnessVideoUno: '(//a//span[@class="blog-title"])[12]',
				wellnessVideoDos: '(//a//span[@class="blog-title"])[12]',
				wellnessVideoTres: '(//a//span[@class="blog-title"])[12]',
			},
			loMasVisto: {
				loMasVistoVideoUno: '(//a//span[@class="blog-title"])[12]',
				loMasVistoVideoDos: '(//a//span[@class="blog-title"])[13]',
				loMasVistoVideoTres: '(//a//span[@class="blog-title"])[14]',
				verMasButton: '//div[text()="Ver más"]',
			},
		}
	}
}

export = new WellnessPage()
