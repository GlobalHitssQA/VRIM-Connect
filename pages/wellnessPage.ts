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
				wellnessVideoUno: '(//a//span[@class="blog-title"])[1]',
				wellnessVideoDos: '(//a//span[@class="blog-title"])[2]',
				wellnessVideoTres: '(//a//span[@class="blog-title"])[3]',
			},
			loMasVisto: {
				loMasVistoVideoUno: '(//a//span[@class="blog-title"])[7]',
				loMasVistoVideoDos: '(//a//span[@class="blog-title"])[8]',
				loMasVistoVideoTres: '(//a//span[@class="blog-title"])[9]',
				verMasButton: '//div[text()="Ver más"]',
			},
		}
	}
}

export = new WellnessPage()
