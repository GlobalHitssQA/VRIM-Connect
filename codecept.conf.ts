require('ts-node/register')
// Esto se debe de descomentar si se va a usar el la propiedad de emulate en la configuracion
// const { devices } = require('playwright')
export const vertical = {
	height: 1334,
	width: 1000,
}
export const horizontal = {
	height: 1000,
	width: 1334,
}
export const tabletDescriptor = {
	viewport: horizontal,
	userAgent:
		'Mozilla/5.0 (Linux; Android 10; SM-P610) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.136 Safari/537.36',
	deviceScaleFactor: 1,
	isMobile: true,
	hasTouch: true,
	defaultBrowserType: 'chromium',
}
exports.config = {
	output: './output',
	helpers: {
		Playwright: {
			url: 'https://qa-miembros.vrim.com.mx/auth/login',
			// Ejemplo de emular un dispositvo pero por defecto en todas las pruebas si quiere solo probarse solo en una prueba vease el test de emulacionDeDispositivos
			// emulate: tabletDescriptor,
			windowSize: '1444x693',
			device: 'Desktop',
			show: false,
			browser: 'chromium',
			waitForNavigation: 'domcontentloaded',
			video: false,
			keepVideoForPassedTests: true,
			pressKeyDelay: 100,
			trace: true,
			keepTraceForPassedTests: false,
			locale: 'es-MX',
		},
		PlaywrightVideoAllure: {
			require: './utils/playwrightVideoAllure_helper',
		},
		REST: {
			endpoint: 'https://rickandmortyapi.com/api/character/',
		},
		GraphQL: {
			endpoint: 'https://rickandmortyapi.com/graphql',
		},
		DbHelper: {
			require: './node_modules/codeceptjs-dbhelper',
		},
		// TODO: Revisar o actualizar la librería.

		// ResembleHelper: {
		//	require: 'codeceptjs-resemblehelper',
		//	baseFolder: './tests/screenshots/base/',
		//	diffFolder: './tests/screenshots/diff/',
		// },

		ChaiWrapper: {
			require: 'codeceptjs-chai',
		},
	},
	include: {
		I: './steps_file.js',
		loginPage: './pages/loginPage',
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*.feature',
		steps: ['./step_definitions/ExplorarSteps'],
	},
	plugins: {
		subtitles: {
			enabled: true,
		},
		screenshotOnFail: {
			enabled: true,
		},
		pauseOnFail: {},
		retryFailedStep: {
			enabled: true,
		},
		tryTo: {
			enabled: true,
		},
		allure: {
			enabled: true,
			require: 'allure-codeceptjs',
			outputDir: `./output/allure-results-worker-${
				process.env.WORKER_ID || 'default'
			}`,
		},
		selenoid: {
			enabled: false,
			deletePassed: false,
			autoCreate: true,
			autoStart: true,
			sessionTimeout: '30m',
			enableVideo: true,
			enableLog: true,
		},
		fakerTransform: {
			enabled: true,
		},
	},
	tests: './tests/*_test.ts',
	name: 'Framework',
}
