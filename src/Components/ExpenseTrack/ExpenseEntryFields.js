import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	checkIfOtherIsSelected,
	clearAllFields,
	spentHandle,
	// salaryData,
	addData,
	checkAllEntries,
} from './ExpenseData/functions';

import '../Styles/expFields.css';
import { createExpData } from '../../actions/data';

const ExpenseEntryFields = () => {
	const expList = useSelector(state => state.expList);
	console.log(expList);
	const dispatch = useDispatch();
	let empty = ['Month', 'Detail', 'Amount'];
	const handleClick = i => {
		let expData = [];
		let mType = document.getElementById('moneyType').value;
		if (i === '1') {
			if (checkAllEntries()) {
				alert(`${empty[checkAllEntries() - 1]} is empty`);
			}
			if (mType !== 'General') {
				alert(`${mType} cannot be added in expenditure category`);
			} else {
				expData = spentHandle(i);
				if (expData) {
					let currentBalance = document.getElementById('value2').textContent;
					currentBalance = currentBalance.replace(/,/g, '');
					currentBalance = parseInt(currentBalance);
					if (expData.amount * -1 > currentBalance) {
						alert(
							'You cannot spent more then the current balance, first add some salary or bonus or any extra money to the account then add the expenditure.',
						);
					} else {
						dispatch(createExpData(expData));
					}
				}
			}
		} else if (i === '2') {
			let flag = 0;
			expData = addData(mType);
			console.log(expData);
			console.log(mType);
			if (!expData) {
				flag = 1;
			} else if (mType === 'Salary') {
				expList.forEach(eachExpData => {
					console.log(typeof expData.month + ' ' + typeof eachExpData.month);
					console.log(typeof expData.year + ' ' + typeof eachExpData.year);

					if (
						expData.month === eachExpData.month &&
						expData.year === eachExpData.year &&
						eachExpData.detail === 'Salary'
					) {
						flag = 2;
					}
				});
			}
			if (flag === 2) {
				alert(
					'Salary already added for the month: ' +
						expData.month +
						' in year: ' +
						expData.year,
				);
			} else if (flag === 0) {
				dispatch(createExpData(expData));
			}
			console.log(flag);
		}
	};
	return (
		<div className='expEntryBox'>
			<div className='exp-input-area'>
				<select name='Month' id='month' onChange={checkIfOtherIsSelected}>
					<option value='Same'>This Month</option>
					<option value='Other'>Other</option>
				</select>
				<select name='monthSelect' id='monthselect'>
					<option value='noSelection'>-Select a month- </option>
					<option value='1'>January</option>
					<option value='2'>February</option>
					<option value='3'>March</option>
					<option value='4'>April</option>
					<option value='5'>May</option>
					<option value='6'>June</option>
					<option value='7'>July</option>
					<option value='8'>August</option>
					<option value='9'>September</option>
					<option value='10'>October</option>
					<option value='11'>November</option>
					<option value='12'>December</option>
				</select>
				<input type='text' id='detail' placeholder='Detail' />
				<input type='text' id='amount' placeholder='Amount' />
				<select name='Mode' id='mode'>
					<option value='Online'>Online</option>
					<option value='Cash'>Cash</option>
				</select>
				<select name='MoneyType' id='moneyType'>
					<option value='General'>General</option>
					<option value='Salary'>Salary</option>
					<option value='Bonus'>Bonus</option>
					<option value='Reimbursement'>Reimbursement</option>
				</select>
			</div>
			<div className='exp-buttons-area'>
				<input
					type='button'
					value='Spent'
					id='spent'
					onClick={() => handleClick('1')}
				/>
				<input
					type='button'
					value='Add'
					id='recieved'
					onClick={() => handleClick('2')}
				/>
				<input
					type='button'
					value='Clear'
					id='expclear'
					onClick={clearAllFields}
				/>
			</div>
		</div>
	);
};

export default ExpenseEntryFields;
