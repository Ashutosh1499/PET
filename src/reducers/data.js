// eslint-disable-next-line import/no-anonymous-default-export
export default (data = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...data, action.payload];
		default:
			return data;
	}
};
