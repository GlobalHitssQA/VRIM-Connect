export const config = {
	DOMAIN: 'https://medicavrim-si.inbursa.com',
	expectedStatusCodes: {
		'/login': 200,
		'/post': 200,
		'/create': 201,
		'/delete': 204,
	},
}

export const LOCATIONS = {
	CDMX: { latitude: 19.4326, longitude: -99.1332, accuracy: 100 },
	NY: { latitude: 40.7128, longitude: -74.006, accuracy: 100 },
}
