import React from 'react';
import { useDispatch } from 'react-redux';

import '../Styles/dataentryfields.css';

import {
	checkIfOtherIsSelected,
	clearAllFields,
	checkAllEntries,
} from './functions';
import { createData } from '../../actions/data';

const DataEntryFields = () => {
	let testData = {
		category: '',
		description: '',
		priceMin: '',
		priceMax: '',
		status: Boolean(false),
	};

	const dispatch = useDispatch();

	const handleAdd = () => {
		let i = 0;
		testData.category = document.getElementById('category').value;
		testData.description = document.getElementById('description').value;
		testData.priceMin = document.getElementById('minPrice').value;
		testData.priceMax = document.getElementById('maxPrice').value;
		console.log(typeof testData.priceMin, testData.priceMin);
		if (
			(testData.category = document.getElementById('category').value) ===
			'Other'
		) {
			i = 1;
			testData.category = document.getElementById('otherCategory').value;
		}

		if (checkAllEntries(i)) {
			return;
		}
		dispatch(createData(testData));
		console.log('added');

		clearAllFields();
	};

	return (
		<div className='dataEntryBox'>
			<div className='input-area'>
				<select name='Category' id='category' onChange={checkIfOtherIsSelected}>
					<option value='Option1'>Option-1</option>
					<option value='Option2'>Option-2</option>
					<option value='Option3'>Option-3</option>
					<option value='Option4'>Option-4</option>
					<option value='Other'>Other</option>
				</select>
				<input
					type='text'
					id='otherCategory'
					placeholder='Specify the other category'
				/>
				<input type='text' id='description' placeholder='Description' />
				<input type='text' id='minPrice' placeholder='Minimum Price' />
				<input type='text' id='maxPrice' placeholder='Maximum Price' />
			</div>
			<div className='buttons-area'>
				<input type='button' value='Add' id='addButton' onClick={handleAdd} />
				<input
					type='button'
					value='Clear'
					id='clearButton'
					onClick={clearAllFields}
				/>
			</div>
		</div>
	);
};

export default DataEntryFields;
