import React from 'react';
import { useSelector } from 'react-redux';
import { numberWithCommas } from './functions';

const MiniDetial11 = () => {
	const expList = useSelector(state => state.expList);

	let allMonths = [
		['January', 0],
		['February', 0],
		['March', 0],
		['April', 0],
		['May', 0],
		['June', 0],
		['July', 0],
		['August', 0],
		['September', 0],
		['October', 0],
		['November', 0],
		['December', 0],
	];
	let mths = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let currentMonth = new Date().getMonth();
	let currentYear = new Date().getFullYear();
	let salaryInfo = {};
	let adddedYears = [];
	let lastMonthSalary = 0;
	expList.forEach(eachExpData => {
		if (
			allMonths[currentMonth - 1][0] === eachExpData.month &&
			currentYear === eachExpData.year &&
			eachExpData.detail === 'Salary'
		) {
			lastMonthSalary = eachExpData.amount;
		}
		if (!adddedYears.includes(eachExpData.year)) {
			adddedYears.push(eachExpData.year);
			salaryInfo[eachExpData.year] = allMonths;
			// console.log(salaryInfo);
		}
		console.log(salaryInfo[eachExpData.year]);
		console.log(mths.indexOf(eachExpData.month));
		console.log(salaryInfo[eachExpData.year][mths.indexOf(eachExpData.month)]);
		console.log(salaryInfo[eachExpData.year]);
		salaryInfo[eachExpData.year][mths.indexOf(eachExpData.month)][1] = 1;
		// if (eachExpData.detail === 'Salary' || eachExpData.detail === 'Bonus')
		// 	salaryInfo[eachExpData.year][mths.indexOf(eachExpData.month)][1] +=
		// 		eachExpData.amount;
	});
	// console.log(salaryInfo['2021'][0]);
	// console.log(salaryInfo['2021'][1][0]);
	// console.log(salaryInfo);
	return (
		<>
			<div className='amountDisplay1'>
				₹<span>{numberWithCommas(lastMonthSalary)}</span>/-
			</div>
			<div className='amountDisplay2'></div>
		</>
	);
};

export default MiniDetial11;
