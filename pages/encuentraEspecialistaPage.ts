<<<<<<< HEAD
class EncuentraEspecialistaPage {
=======
import { BasePage } from './basePage'

class EncuentraEspecialistaPage extends BasePage {
>>>>>>> master
	fields: {
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
			coloproctologiaOption: string
		}
	}

	constructor() {
<<<<<<< HEAD
=======
		super()
>>>>>>> master
		this.fields = {
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
				coloproctologiaOption: '//span[text()="Coloproctología"]',
			},
		}
	}
}

export = new EncuentraEspecialistaPage()
