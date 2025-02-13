<<<<<<< HEAD
class LoMasRecientePage {
=======
import { BasePage } from './basePage'

class LoMasRecientePage extends BasePage {
>>>>>>> master
	fields: {
		mainContent: {
			loMasVistoVideoUno: string
			loMasVistoVideoDos: string
			loMasVistoVideoTres: string
		}
	}

	constructor() {
<<<<<<< HEAD
=======
		super()
>>>>>>> master
		this.fields = {
			mainContent: {
				loMasVistoVideoUno:
					'//ul[@class="profile-card-group"]//app-card-blog[1]//span[@class="blog-title"]',
				loMasVistoVideoDos:
					'//ul[@class="profile-card-group"]//app-card-blog[2]//span[@class="blog-title"]',
				loMasVistoVideoTres:
					'//ul[@class="profile-card-group"]//app-card-blog[3]//span[@class="blog-title"]',
			},
		}
	}
}

export = new LoMasRecientePage()
