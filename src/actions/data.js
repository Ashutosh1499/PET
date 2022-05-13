import * as api from '../api';

export const getData = () => async dispatch => {
	try {
		const { data } = await api.fetchData();
		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createData = oneData => async dispatch => {
	try {
		const { data } = await api.createData(oneData);

		dispatch({ type: 'CREATE', payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const getExpData = () => async dispatch => {
	try {
		const { data } = await api.fetchExpList();
		dispatch({ type: 'FETCH_ALL_EXPLIST', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const createExpData = oneData => async dispatch => {
	try {
		const { data } = await api.createExpData(oneData);

		dispatch({ type: 'CREATE_EXP_LIST', payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
