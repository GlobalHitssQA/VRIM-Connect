class CitasPage {
	fields: {
		header: {
			logoVrim: string
			avatarProfileButton: string
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
			correo: string
			seleccionaLaCita: string
			seleccionaUnMes: string
			uploadPhoto: string
			seleccionarPerfil: string
		}

		suscriptionModal: { beneficiosMessage: string; descartarButton: string }
	}

	constructor() {
		this.fields = {
			header: {
				logoVrim: '//img[@alt="logo vrim"]',
				avatarProfileButton:
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
				nombreDelUusuario: '//h3[@class="mb-0 text-name"]',
				correo: '//span[@class="text-muted fs-14"]',
				seleccionaLaCita: '//div[@id="mat-select-value-11"]',
				seleccionaUnMes: '//input[@id="mat-input-61"]',
				uploadPhoto: '//label[@class="badge-editar rounded-pill"]',
				seleccionarPerfil: '//a[@class="nav-link text-center"]',
			},

			suscriptionModal: {
				beneficiosMessage:
					'//span[text()="Consigue mejores beneficios al suscribirte"]',
				descartarButton: '//button[text()=" Descartar "]',
			},
		}
	}
}

export = new CitasPage()
