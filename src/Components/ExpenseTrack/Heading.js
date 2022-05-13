import React from 'react';

import '../Styles/expHeading.css';

const Heading = () => {
	let date = new Date();
	return (
		<div className='exphead'>
			<div className='exptitle'>Personal Expense Tracker</div>
			<div className='expyear'>
				<select name='year' id='yearSelect'>
					<option value='2022'>{date.getFullYear()}</option>
					<option value='2021'>2021</option>
				</select>
				<span></span>
			</div>
		</div>
	);
};

export default Heading;
