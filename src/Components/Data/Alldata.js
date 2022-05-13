import React from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading';
import Eachdata from './Eachdata';
import '../Styles/dataTableStyle.css';

const Alldata = () => {
	const data = useSelector(state => state.data);

	let total1 = 0;
	let total2 = 0;
	data.forEach(indivData => {
		total1 = total1 + indivData.priceMin;
		total2 = total2 + indivData.priceMax;
	});

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	return !data.length ? (
		<Loading></Loading>
	) : (
		<div>
			<div className='filters'></div>
			<div id='dataContainer'>
				<div className='titles'>
					<div className='eachDataHeading'>Category</div>
					<div className='eachDataHeading'>Description</div>
					<div className='eachDataHeading'>Minimum Price(₹) </div>
					<div className='eachDataHeading'>Maximum Price(₹)</div>
					<div className='statusHeading'>Status</div>
					<div className='total'>
						Total<br></br>
						{numberWithCommas(total1)} - {numberWithCommas(total2)}
					</div>
				</div>
				{data.map(oneData => (
					<div key={oneData._id} className='eachData'>
						<Eachdata oneData={oneData} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Alldata;
