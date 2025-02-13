export class BasePage {
	baseFields: {
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
	}

	constructor() {
		const SIDEBAR_PREFIX =
			'//div[@class="sidebar card bg-transparent border-0 shadow-none mb-0 rounded-0"]//a'
		this.baseFields = {
			header: {
				logoVrim: '//img[@alt="logo vrim"]',
				avatarProfileButton:
					'(//img[contains(@class, "1img_rounded") and contains(@src, "no-avatar.png")])[3]',
				buscarInput: '(//input[@placeholder="Buscar"])[3]',
			},
			sidebar: {
				explorarPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Explorar"]]`,
				planesPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Planes"]]`,
				citasPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Citas"]]`,
				monitoreoPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Monitoreo"]]`,
				perfilPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Perfil"]]`,
				farmaciaPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Farmacia"]]`,
				faqPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="FAQ"]]`,
				legalesPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Legales"]]`,
				contactoPageButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Contacto"]]`,
				cerrarSesionButton: `${SIDEBAR_PREFIX}[text()[normalize-space()="Sesión y cuenta"]]`,
			},
		}
	}
}
