<<<<<<< HEAD
class CitasPage {
=======
import { BasePage } from './basePage'

class CitasPage extends BasePage {
>>>>>>> master
	fields: {
		mainContent: {
			nombreDelUsuario: string
			correo: string
			seleccionaLaCita: string
			seleccionaUnMes: string
			uploadPhoto: string
			seleccionarPerfil: string
		}

		suscriptionModal: { beneficiosMessage: string; descartarButton: string }
	}

	constructor() {
<<<<<<< HEAD
=======
		super()
>>>>>>> master
		this.fields = {
			mainContent: {
				nombreDelUsuario: '//h3[@class="mb-0 text-name"]',
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
