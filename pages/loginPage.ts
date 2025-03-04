import { LOCATIONS } from '../utils/config'

const { I } = inject()

const userCredentials: Record<string, { username: string; password: string }> =
	{
		basic: { username: '8333006407', password: 'Prueba$2025' },
		vrimConnect: { username: '5524326782', password: 'Prueba$2025' },
	}
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

	loginStep(userType: string) {
		const credentials = userCredentials[userType]
		I.setGeolocation(LOCATIONS.CDMX)
		I.amOnPage('/')
		I.waitForElement(this.fields.header.logoVrim, 20)
		I.refreshPage() // si no se hace refresh no deja entrar (ya está reportado)
		I.waitForElement(this.fields.header.logoVrim, 10)
		I.click(this.fields.mainContent.iniciarSesionButton)
		I.fillField(this.fields.mainContent.userNameInput, credentials.username)
		I.fillField(this.fields.mainContent.passwordInput, credentials.password)
		I.click(this.fields.mainContent.entrarButton)
		I.wait(12) // Se usa para esperar a que se carguen todos los elementos.
	}
}

export = new LoginPage()
