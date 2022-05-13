// eslint-disable-next-line import/no-anonymous-default-export
export default (data = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL_EXPLIST':
			return action.payload;
		case 'CREATE_EXP_LIST':
			return [...data, action.payload];
		default:
			return data;
	}
};
