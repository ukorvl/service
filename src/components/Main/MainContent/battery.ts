/* eslint-disable @typescript-eslint/no-var-requires */
const getBattery = () => {
  if (!navigator || !navigator.getBattery) {
		return Promise.reject(new Error('Browser not supported'));
	}

	return navigator.getBattery();
}

// eslint-disable-next-line jsdoc/require-jsdoc
export default async () => {
	try {
		const {level, charging} = await getBattery();

		return {
			level: `${level * 100}%`,
			charging
		}
	} catch (_) {
		return {
			level: 'Нет данных',
			charging: 'Нет данных'
		}
	}
}
