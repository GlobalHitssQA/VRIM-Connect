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
		credentials: {
			userName: string
			password: string
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
			credentials: {
				// userName: '8333006407',
				// password: 'Prueba123.',
				userName: '5524326782',
				password: 'Prueba$2025',
			},
		}
	}

	async loginStep() {
		I.amOnPage('/')
		I.waitForElement(this.fields.header.logoVrim, 10)
		I.click(this.fields.mainContent.iniciarSesionButton)
		I.fillField(
			this.fields.mainContent.userNameInput,
			this.fields.credentials.userName
		)
		I.fillField(
			this.fields.mainContent.passwordInput,
			this.fields.credentials.password
		)
		I.click(this.fields.mainContent.entrarButton)
	}
}

export = new LoginPage()
