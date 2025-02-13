import { BasePage } from './basePage'

class PerfilPage extends BasePage {
	fields: {
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
		}
		suscripcionSection: {
			upgradeButton: string
			memberStartDate: string
			fechaVigencia: string
			paymentPeriod: string
			nextPayday: string
			cambiarDePlanButton: string
		}
		misBeneficiosSection: {
			activarPlanButton: string
			perderMisBeneficiosButton: string
		}
		pagoyFacturaSection: {
			nuevaTarjetaButton: string
			regimenFiscalInput: string
			nombreoRazonSocialInput: string
			rfcInput: string
			codigoPostalInput: string
			calleInput: string
			numeroExteriorInput: string
			numeroInteriorInput: string
			coloniaInput: string
			ciudadInput: string
			municipiooAlcaldiaInput: string
			estadoInput: string
			correoInput: string
		}
		miCuentaSection: {
			aliasInput: string
			nombresInput: string
			apellidoPaternoInput: string
			apellidoMaternoInput: string
			fechaDeNacimientoInput: string
			rfcInput: string
			correoInput: string
			curpInput: string
			numTelefonicoInput: string
			sexoDeNacimientoInput: string
			edadInput: string
			estaturaInput: string
			pesoInput: string
			guardarButton: string
			cancelarButton: string
			guardarAliasButton: string
		}
		resultadosDeLaboratorioSection: {
			dropDownArrowCriterioDeBusqueda: string
			addResultButton: string
		}
		expedienteMedicoSection: {
			historialDeServiciosButton: string
			grupoSanguineoButton: string
			enfermedadesPreexistentesButton: string
			estiloDeVida: string
			seleccionaLaCita: string
			seleccionaUnMesInput: string
			tipoDeSangreViewBox: string
			donadorSiOption: string
			donadorNoOption: string
		}
		enfermedadesPreexistentesSection: {
			cancerOption: string
			diabetesOption: string
			epocOption: string
			hipertensionArterialOption: string
			obesidadOption: string
			dislipidemiaOption: string
			artritisReumatoideOption: string
			cardiovascularOption: string
			cerebrovascularOption: string
			ningunaEnfermedadOption: string
			antecAlergicosOption: string
			antecQuirurgicosOption: string
			antecTraumatologicos: string
			enfInfectocontagiosasOption: string
			enfCronicoDegenerativasOption: string
			transfusionesOption: string
			alcoholismoOption: string
			tabaquismoOption: string
			toxicomaniasOption: string
			ningunaEnfermedadEnFamiliaOption: string
			alimentosOption: string
			animalesOption: string
			insectosVenenososOption: string
			medicamentosOption: string
			metalesOption: string
			mohoOption: string
			polenOption: string
			otrasOption: string
			ningunaAlergiaOption: string
		}
		estiloDeVidaSection: {
			aceiteDeOlivoInput: string
			cafeInput: string
			caramelosInput: string
			cerealInput: string
			cervezaoVinoInput: string
			chicharronesInput: string
			chileInput: string
			ensaladaVerdeInput: string
			frijolInput: string
			frutasInput: string
			galletasInput: string
			hotCakesInput: string
			huevoInput: string
			lecheInput: string
			mantequillaInput: string
			nuecesoCacachuatesInput: string
			otrasFriturasInput: string
			otrasFrutasInput: string
			otrasLeguminosasInput: string
			panBlancoInput: string
			panDulceInput: string
			pastasInput: string
			pastelesInput: string
			pescadoInput: string
			polloInput: string
			puercoInput: string
			refrescoInput: string
			resInput: string
			soyaInput: string
			tortillaHarinaInput: string
			tortillaMaizInput: string
			verdurasInput: string
			aguardienteInput: string
			alcoholPuroInput: string
			brandyInput: string
			cervezaInput: string
			champanaInput: string
			cognacInput: string
			ginebraInput: string
			licorDulceInput: string
			mezcalInput: string
			pulqueInput: string
			ronInput: string
			tequilaInput: string
			vinoInput: string
			vodkaInput: string
			whiskyInput: string
		}
		recetasMedicasSection: {
			seleccionaUnMes: string
			alertaNoRecetas: string
			aceptarButton: string
		}
	}

	constructor() {
		super()
		this.fields = {
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
					'//button[contains(@class, "mat-mdc-tab-header-pagination-before")]',
				rightButton:
					'//button[contains(@class, "mat-mdc-tab-header-pagination-after")]',
				miCuentaButton: '//span[text()=" Mi cuenta "]',
				planBasicoButton: '//span[text()=" Plan Básico "]',
				saldosaFavorButton: '//span[text()=" Saldos a favor "]',
			},
			suscripcionSection: {
				upgradeButton: '//a[text()="Upgrade"]',
				memberStartDate: '(//p[@class="text-muted"])[1]',
				fechaVigencia: '(//p[@class="text-muted"])[2]',
				paymentPeriod: '(//p[@class="text-muted"])[3]',
				nextPayday: '(//p[@class="text-muted"])[4]',
				cambiarDePlanButton: '//button[text()="Cambiar de plan"]',
			},
			misBeneficiosSection: {
				activarPlanButton: '//button[text()=" Activar Plan "]',
				perderMisBeneficiosButton:
					'//button[text()="Perder mis beneficios"]',
			},
			pagoyFacturaSection: {
				nuevaTarjetaButton: '//p[text()="Nueva tarjeta"]',
				regimenFiscalInput:
					'//mat-select[@formcontrolname="selectedTaxRegime"]',
				nombreoRazonSocialInput:
					'//input[@placeholder="Nombre o Razón Social"]',
				rfcInput: '//input[@placeholder="RFC"]',
				codigoPostalInput: '//input[@placeholder="Código Postal"]',
				calleInput: '//input[@placeholder="Calle"]',
				numeroExteriorInput: '//input[@placeholder="Número Exterior"]',
				numeroInteriorInput: '//input[@placeholder="Número Interior"]',
				coloniaInput: '//input[@placeholder="Colonia"]',
				ciudadInput: '//input[@placeholder="Ciudad"]',
				municipiooAlcaldiaInput:
					'//input[@placeholder="Municipio o Alcaldía"]',
				estadoInput: '//input[@placeholder="Estado"]',
				correoInput: '//input[@placeholder="Correo Electrónico"]',
			},
			miCuentaSection: {
				aliasInput: '//input[@placeholder="Alias"]',
				nombresInput: '//input[@placeholder="Nombre(s)"]',
				apellidoPaternoInput:
					'//input[@placeholder="Apellido Paterno"]',
				apellidoMaternoInput:
					'//input[@placeholder="Apellido Materno"]',
				fechaDeNacimientoInput:
					'//input[@placeholder="Fecha de Nacimiento"]',
				curpInput: '//input[@placeholder="CURP"]',
				rfcInput: '//input[@placeholder="RFC"]',
				numTelefonicoInput:
					'//input[@placeholder="Número Teléfonico "]',
				correoInput: '//input[@placeholder="Correo Electrónico"]',
				sexoDeNacimientoInput:
					'//input[@placeholder="Sexo de Nacimiento"]',
				edadInput: '//input[@placeholder="Edad"]',
				estaturaInput: '//input[@placeholder="Estatura (metros)"]',
				pesoInput: '//input[@placeholder="Peso (kilogramos)"]',
				guardarButton: '//button[text()="Guardar"]',
				cancelarButton: '//button[text()="Cancelar"]',
				guardarAliasButton: '//button[text()="Guardar alias"]',
			},
			resultadosDeLaboratorioSection: {
				dropDownArrowCriterioDeBusqueda:
					'//div[@class="mat-mdc-select-arrow ng-tns-c19-38"]',
				addResultButton: '//button[@class="btn1 inputSeparacion"]',
			},
			expedienteMedicoSection: {
				historialDeServiciosButton:
					'//div[text()=" Historial de servicios "]',
				grupoSanguineoButton: '//div[text()=" Grupo sanguíneo "]',
				enfermedadesPreexistentesButton:
					'//div[text()=" Enfermedades preexistentes "]',
				estiloDeVida: '//div[text()=" Estilo de vida "]',
				seleccionaLaCita: '//span[text()="Selecciona la cita"]',
				seleccionaUnMesInput: '//input[@id="mat-input-3"]',
				tipoDeSangreViewBox: '//div[@id="mat-select-value-7"]',
				donadorSiOption: '//input[@value="Si"]',
				donadorNoOption: '//input[@value="No"]',
			},
			enfermedadesPreexistentesSection: {
				cancerOption: '//button[text()=" Cáncer"]',
				diabetesOption: '//button[text()=" Diabetes mellitus"]',
				epocOption: '//button[text()=" EPOC"]',
				hipertensionArterialOption:
					'//button[text()=" Hipertensión arterial"]',
				obesidadOption: '//button[text()=" Obesidad"]',
				dislipidemiaOption: '//button[text()=" Dislipidemia"]',
				artritisReumatoideOption:
					'//button[text()=" Artritis reumatoide"]',
				cardiovascularOption: '//button[text()=" Cardiovascular"]',
				cerebrovascularOption: '//button[text()=" Cerebrovascular"]',
				ningunaEnfermedadOption: '(//button[text()=" Ninguna"])[1]',
				antecAlergicosOption: '//button[text()=" Antec. Alérgicos"]',
				antecQuirurgicosOption:
					'//button[text()=" Antec. Quirúrgicos"]',
				antecTraumatologicos:
					'//button[text()=" Antec. Traumatológicos"]',
				enfInfectocontagiosasOption:
					'//button[text()=" Enf. Infectocontagiosas"]',
				enfCronicoDegenerativasOption:
					'//button[text()=" Enf. Crónico degenerativas"]',
				transfusionesOption: '//button[text()=" Transfusiones"]',
				alcoholismoOption: '//button[text()=" Alcoholismo"]',
				tabaquismoOption: '//button[text()=" Tabaquismo"]',
				toxicomaniasOption: '//button[text()=" Toxicomanías"]',
				ningunaEnfermedadEnFamiliaOption:
					'(//button[text()=" Ninguna"])[2]',
				alimentosOption: '//button[text()=" Alimentos"]',
				animalesOption: '//button[text()=" Animales"]',
				insectosVenenososOption:
					'//button[text()=" Insectos / Venenos"]',
				medicamentosOption: '//button[text()=" Medicamentos"]',
				metalesOption: '//button[text()=" Metales"]',
				mohoOption: '//button[text()=" Moho"]',
				polenOption: '//button[text()=" Polen"]',
				otrasOption: '//button[text()=" Otras"]',
				ningunaAlergiaOption: '(//button[text()=" Ninguna"])[3]',
			},
			estiloDeVidaSection: {
				aceiteDeOlivoInput:
					'//label[text()="Aceite de olivo"]/following::input[1]',
				cafeInput: '//label[text()="Café"]/following::input[1]',
				caramelosInput:
					'//label[text()="Caramelos"]/following::input[1]',
				cerealInput: '//label[text()="Cereal"]/following::input[1]',
				cervezaoVinoInput:
					'//label[text()="Cerveza o Vino"]/following::input[1]',
				chicharronesInput:
					'//label[text()="Chicharrones"]/following::input[1]',
				chileInput: '//label[text()="Chile"]/following::input[1]',
				ensaladaVerdeInput:
					'//label[text()="Ensalada verde"]/following::input[1]',
				frijolInput: '//label[text()="Frijol"]/following::input[1]',
				frutasInput:
					'//label[text()="Frutas (Cítricos)"]/following::input[1]',
				galletasInput: '//label[text()="Galletas"]/following::input[1]',
				hotCakesInput:
					'//label[text()="Hot cakes"]/following::input[1]',
				huevoInput: '//label[text()="Huevo"]/following::input[1]',
				lecheInput: '//label[text()="Leche"]/following::input[1]',
				mantequillaInput:
					'//label[text()="Mantequilla"]/following::input[1]',
				nuecesoCacachuatesInput:
					'//label[text()="Nueces / cacahuates"]/following::input[1]',
				otrasFriturasInput:
					'//label[text()="Otras frituras"]/following::input[1]',
				otrasFrutasInput:
					'//label[text()="Otras frutas"]/following::input[1]',
				otrasLeguminosasInput:
					'//label[text()="Otras leguminosas"]/following::input[1]',
				panBlancoInput:
					'//label[text()="Pan blanco"]/following::input[1]',
				panDulceInput:
					'//label[text()="Pan dulce"]/following::input[1]',
				pastasInput: '//label[text()="Pastas"]/following::input[1]',
				pastelesInput: '//label[text()="Pasteles"]/following::input[1]',
				pescadoInput: '//label[text()="Pescado"]/following::input[1]',
				polloInput: '//label[text()="Pollo"]/following::input[1]',
				puercoInput: '//label[text()="Puerco"]/following::input[1]',
				refrescoInput: '//label[text()="Refresco"]/following::input[1]',
				resInput: '//label[text()="Res"]/following::input[1]',
				soyaInput: '//label[text()="Soya"]/following::input[1]',
				tortillaHarinaInput:
					'//label[text()="Tortilla de harina"]/following::input[1]',
				tortillaMaizInput:
					'//label[text()="Tortilla de maíz"]/following::input[1]',
				verdurasInput: '//label[text()="Verduras"]/following::input[1]',
				aguardienteInput:
					'//label[text()="AGUARDIENTE"]/following::input[1]',
				alcoholPuroInput:
					'//label[text()="ALCOHOL PURO"]/following::input[1]',
				brandyInput: '//label[text()="BRANDY"]/following::input[1]',
				cervezaInput: '//label[text()="CERVEZA"]/following::input[1]',
				champanaInput: '//label[text()="CHAMPAÑA"]/following::input[1]',
				cognacInput: '//label[text()="COGNAC"]/following::input[1]',
				ginebraInput: '//label[text()="GINEBRA"]/following::input[1]',
				licorDulceInput:
					'//label[text()="LICOR DULCE"]/following::input[1]',
				mezcalInput: '//label[text()="MEZCAL"]/following::input[1]',
				pulqueInput: '//label[text()="PULQUE"]/following::input[1]',
				ronInput: '//label[text()="RON"]/following::input[1]',
				tequilaInput: '//label[text()="TEQUILA"]/following::input[1]',
				vinoInput: '//label[text()="VINO"]/following::input[1]',
				vodkaInput: '//label[text()="VODKA"]/following::input[1]',
				whiskyInput: '//label[text()="WHISKY"]/following::input[1]',
			},
			recetasMedicasSection: {
				seleccionaUnMes: '//input[@id="mat-input-21"]',
				alertaNoRecetas: '//p[text()="No se encontraron recetas"]',
				aceptarButton: '//button[text()="Aceptar"]',
			},
		}
	}
}

export = new PerfilPage()
