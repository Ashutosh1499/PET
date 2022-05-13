import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getData } from './actions/data';
import { getExpData } from './actions/data';
import MainComponent from './Components/MainConponent/MainComponent';
// import Topnav from './Components/NavBar/Topnav';
import './Components/Styles/test.css';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
		dispatch(getExpData());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return <MainComponent />;
};

export default App;
