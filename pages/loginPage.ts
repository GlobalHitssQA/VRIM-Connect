const { I } = inject()

class LoginPage {
	fields: {
		header: {
			logoVrim: string
		}
		mainContent: {
			iniciarSesionButton: string
			userNameInput: string
			passwordInput: string
			entrarButton: string
		}
	}

	constructor() {
		this.fields = {
			header: {
				logoVrim: '//img[@alt="logo vrim"]',
			},
			mainContent: {
				iniciarSesionButton: '//button[text()="Iniciar sesión"]',
				userNameInput:
					'//input[@placeholder="Número teléfonico/Correo electrónico"]',
				passwordInput: '//input[@placeholder="Contraseña"]',
				entrarButton: '//button[text()="Entrar"]',
			},
		}
	}

	async loginStep(userName, password) {
		I.amOnPage('/')
		I.waitForElement(this.fields.header.logoVrim, 10)
		I.click(this.fields.mainContent.iniciarSesionButton)
		I.fillField(this.fields.mainContent.userNameInput, userName)
		I.fillField(this.fields.mainContent.passwordInput, password)
		I.click(this.fields.mainContent.entrarButton)
	}
}

export = new LoginPage()
