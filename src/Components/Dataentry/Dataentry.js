import React from 'react';
import { useDispatch } from 'react-redux';

import {
	checkIfOtherIsSelected,
	addItems,
	clear,
	checkAllEntries,
	checkEntry,
	emptyFieldError,
} from './allFunctions';
import '../Styles/dataentry.css';
import '../Styles/buttons.css';
import { createData } from '../../actions/data';

const Dataentry = () => {
	let testData = {
		category: '',
		description: '',
		priceMin: '',
		priceMax: '',
		status: Boolean(false),
	};

	const dispatch = useDispatch();

	const handleAdd = () => {
		testData.category = document.getElementById('ctgry').value;
		testData.description = document.getElementById('tb2').value;
		testData.priceMin = document.getElementById('tb3').value;
		testData.priceMax = document.getElementById('tb4').value;
		if (
			(testData.category = document.getElementById('ctgry').value) === 'Other'
		) {
			if (checkEntry('1')) {
				emptyFieldError('1');
				return;
			}
			testData.category = document.getElementById('tb1').value;
		}

		if (checkAllEntries()) {
			return;
		}
		dispatch(createData(testData));

		addItems('1');
	};
	return (
		<div className='add'>
			{/* <input type='button' onClick={this.trial} /> */}
			<select
				className='dmenu'
				name='Category'
				id='ctgry'
				onChange={checkIfOtherIsSelected}>
				<option value='Electronics'>Electronics</option>
				<option value='Musical'>Musical</option>
				<option value='Travel'>Travel</option>
				<option value='Home'>Home</option>
				<option value='Other'>Other</option>
			</select>
			<input
				type='text'
				id='tb1'
				className='hdn'
				placeholder='Provide other category*'
			/>
			<input type='text' id='tb2' className='btxt' placeholder='Description*' />
			<input type='text' id='tb3' className='btxt' placeholder='Price(Min.)*' />
			<input type='text' id='tb4' className='btxt' placeholder='Price(Max.)*' />
			<input
				type='button'
				value='Add'
				className='adbtn'
				onClick={() => {
					handleAdd();
				}}
			/>
			<input
				type='button'
				value='Clear'
				onClick={() => {
					clear();
				}}
				className='adbtn'
			/>
		</div>
	);
};

export default Dataentry;
