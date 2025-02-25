require('ts-node/register')

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
			url: 'https://qap-miembros.vrim.com.mx',
			windowSize: '1444x693',
			device: 'Desktop',
			show: false,
			browser: 'chromium',
			waitForNavigation: 'domcontentloaded',
			video: true,
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
		Navbar: './pages/fragments/Navbar',
	},
	mocha: {},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './features/*.feature',
		steps: ['./step_definitions/EndpointValidationSteps'],
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
