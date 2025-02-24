// in this file you can append custom step methods to 'I' object
const { I } = inject()
module.exports = function () {
	return actor({
		async setGeolocation({ latitude, longitude, accuracy }) {
			if (!latitude || !longitude) {
				throw new Error(
					'Las coordenadas de geolocalización son requeridas.'
				)
			}

			I.usePlaywrightTo('set geolocation', async ({ page }) => {
				const context = page.context()
				await context.grantPermissions(['geolocation'])
				await context.setGeolocation({ latitude, longitude, accuracy })
			})

			return { latitude, longitude, accuracy }
		},
	})
}
