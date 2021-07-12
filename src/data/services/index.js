import mock from "../mock.json";

class Services {
	constructor() {
		this.data = mock;
	}

	getData() {
		try {
			return this.data;
		} catch (error) {
			// eslint-disable-next-line no-throw-literal
			throw `Cannot fetch data. Error: ${error}`;
		}
	}
}

export { Services as default };
