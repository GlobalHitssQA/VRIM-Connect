const { I } = inject()

class ExplorarPage {
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
			resultadosDeLaboratorioButton: string
			expedienteMedicoButton: string
			recetasMedicasButton: string
			misBeneficiosButton: string
			suscripcionButton: string
			garantiaDeServiciosButton: string
			pagoyFacturacionButton: string
			leftButton: string
			rightButton: string
			miCuentaButton: string
			planBasicoButton: string
			saldosaFavorButton: string
			dropDownArrowCriterioDeBusqueda: string
			addResultButton: string
			historialDeServiciosButton: string
			grupoSanguineoButton: string
			enfermedadesPreexistentesButton: string
			estiloDeVida: string
			seleccinaUnMesInput: string
			activarPlanButton: string
			upgradeButton: string
			memberStartDate: string
			fechaVigencia: string
			paymentPeriod: string
			nextPayday: string
			cambiarDePlanButton: string
			nuevaTarjetaButton: string
			regimenFiscalInput: string
			nombreoRazonSocialInput: string
			rfcInput: string
			codigoPostalInput: string
			calleInput: string
			numExteriorInput: string
			numInteriorInput: string
			coloniaInput: string
			ciudadInput: string
			municipioInput: string
			estadoInput: string
			correoInput: string
			guardarButton: string
		}
	}

	constructor() {
		this.fields = {
			header: {
				logoVrim: '//img[@alt="logo vrim"]',
				avatarPorfileButton:
					'(//img[contains(@class, "1img_rounded") and contains(@src, "no-avatar.png")])[3]',
				buscarInput:
					'//input[@placeholder="Buscar" and @id="mat-input-2"]',
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
				resultadosDeLaboratorioButton:
					'//span/div[text()=" Resultados de laboratorio "]',
				expedienteMedicoButton:
					'//span/div[text()=" Expediente médico "]',
				recetasMedicasButton: '//span/div[text()=" Recetas médicas "]',
				misBeneficiosButton: '//span/div[text()=" Mis beneficios "]',
				suscripcionButton: '//span/div[text()=" Suscripción "]',
				garantiaDeServiciosButton:
					'//span/div[text()=" Garantía de servicios "]',
				pagoyFacturacionButton:
					'//span/div[text()=" Pago y Facturación "]',
				leftButton:
					'//button[contains(@class, "mat-mdc-tab-header-pagination-before")',
				rightButton:
					'//button[contains(@class, "mat-mdc-tab-header-pagination-after")]',
				miCuentaButton: '//span[text()=" Mi cuenta "]',
				planBasicoButton: '//span[text()=" Plan Básico "]',
				saldosaFavorButton: '//span[text()=" Saldos a favor "]',
				dropDownArrowCriterioDeBusqueda:
					'//div[@class="mat-mdc-select-arrow ng-tns-c19-38"]',
				addResultButton: '//button[@class="btn1 inputSeparacion"]',
				historialDeServiciosButton:
					'//div[text()=" Historial de servicios "]',
				grupoSanguineoButton: '//div[text()=" Grupo sanguíneo "]',
				enfermedadesPreexistentesButton:
					'//div[text()=" Enfermedades preexistentes "]',
				estiloDeVida: '//div[text()=" Estilo de vida "]',
				seleccinaUnMesInput: '//input[@id="mat-input-3"]',
				activarPlanButton: '//button[text()=" Activar Plan "]',
				upgradeButton: '//a[text()="Upgrade"]',
				memberStartDate: '(//p[@class="text-muted"])[1]',
				fechaVigencia: '(//p[@class="text-muted"])[2]',
				paymentPeriod: '(//p[@class="text-muted"])[3]',
				nextPayday: '(//p[@class="text-muted"])[4]',
				cambiarDePlanButton: '//button[text()="Cambiar de plan"]',
				nuevaTarjetaButton: '//p[text()="Nueva tarjeta"]',
				regimenFiscalInput:
					'//div[contains(@class, "mat-mdc-select-trigger")]',
				nombreoRazonSocialInput: '//input[@id="mat-input-19"]',
				rfcInput: '//input[@id="mat-input-20"]',
				codigoPostalInput: '//input[@id="mat-input-21"]',
				calleInput: '//input[@id="mat-input-22"]',
				numExteriorInput: '//input[@id="mat-input-23"]',
				numInteriorInput: '//input[@id="mat-input-24"]',
				coloniaInput: '//input[@id="mat-input-25"]',
				ciudadInput: '//input[@id="mat-input-26"]',
				municipioInput: '//input[@id="mat-input-27"]',
				estadoInput: '//input[@id="mat-input-28"]',
				correoInput: '//input[@id="mat-input-29"]',
				guardarButton: '//button[text()="Guardar"]',
			},
		}
	}

	openCitasPages() {
		I.waitForVisible(this.fields.header.logoVrim)
		I.wait(1000)
	}
}

export = new ExplorarPage()
