import { BasePage } from './basePage'

class WellnessPage extends BasePage {
	fields: {
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
		super()
		this.fields = {
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
