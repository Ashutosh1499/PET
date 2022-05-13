import React from 'react';
import loadingImage from '../Images/loading.png';
import '../Styles/loading.css';

const Loading = () => {
	return (
		<div>
			<div id='loading'>
				<img src={loadingImage} alt='' />
			</div>
			<div className='noData'>
				<h1>No Data</h1>
			</div>
		</div>
	);
};

export default Loading;
