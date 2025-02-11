const { I } = inject()

class EncuentraEspecialistaPage {
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
			seleccionaAlBeneficiario: string
			filtrosAvanzadosButton: string
			medicinaGeneralOption: string
			nutricionOption: string
			pediatriaOption: string
			ginecologiaOption: string
			dermatologiaOption: string
			alergiaOption: string
			angiologiaOption: string
			audiologiaOption: string
			cardiologiaOption: string
			cirugiaGeneralOption: string
			cloroproctologiaOption: string
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
				seleccionaAlBeneficiario:
					'//div[contains(@class, "user-item") and contains(@class, "user-selected")]',
				filtrosAvanzadosButton: '//span[text()="Filtros avanzados"]',
				medicinaGeneralOption: '//span[text()="Medicina general"]',
				nutricionOption: '//span[text()="Nutrición"]',
				pediatriaOption: '//span[text()="Pediatría"]',
				ginecologiaOption: '//span[text()="Ginecología y obstetricia"]',
				dermatologiaOption: '//span[text()="Dermatología"]',
				alergiaOption: '//span[text()="Alergia e inmunología clínica"]',
				angiologiaOption:
					'//span[text()="Angiología y Cirugía vascular"]',
				audiologiaOption:
					'//span[text()="Audiología, otoneurología y foniatría "]',
				cardiologiaOption: '//span[text()="Cardiología"]',
				cirugiaGeneralOption: '//span[text()="Cirugía general"]',
				cloroproctologiaOption: '//span[text()="Coloproctología"]',
			},
		}
	}
}

export = new EncuentraEspecialistaPage()
