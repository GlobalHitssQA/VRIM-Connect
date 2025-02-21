const { I } = inject()

export const Locations = {
	CDMX: { latitude: 19.4326, longitude: -99.1332, accuracy: 100 },
}

export class GeolocationSteps {
	static async setGeolocation({
		latitude,
		longitude,
		accuracy,
	}: {
		latitude: number
		longitude: number
		accuracy: number
	}) {
		I.usePlaywrightTo('set permissions', async ({ page }) => {
			const context = page.context()
			await context.grantPermissions(['geolocation'])
			await context.setGeolocation({ latitude, longitude, accuracy })
		})
	}
}
