export const checkIfOtherIsSelected = () => {
	let month = document.getElementById('month');
	let monthselect = document.getElementById('monthselect');
	let selectedValue = month.value;
	if (selectedValue === 'Other') {
		monthselect.style.paddingLeft = '10px';
		monthselect.style.width = '50%';
		monthselect.style.borderLeft = '1px solid #cfcfcf';
	} else {
		monthselect.style.paddingLeft = '0';
		monthselect.style.width = '0';
		monthselect.style.borderLeft = 'none';
	}
};

export const clearAllFields = () => {
	let monthselect = document.getElementById('monthselect');
	document.getElementById('detail').value = '';
	document.getElementById('amount').value = '';
	document.getElementById('month').selectedIndex = 0;
	document.getElementById('mode').selectedIndex = 0;
	document.getElementById('moneyType').selectedIndex = 0;
	monthselect.style.paddingLeft = '0';
	monthselect.style.width = '0';
	monthselect.style.borderLeft = 'none';
};
export const checkAllEntries = () => {
	let month = document.getElementById('month');
	let monthselect = document.getElementById('monthselect');
	let detail = document.getElementById('detail');
	let amount = document.getElementById('amount');
	if (month.value === 'Other') {
		if (monthselect.value === 'noSelection') {
			return 1;
		}
	}
	if (detail.value === '') {
		return 2;
	}
	if (amount.value === '') {
		return 3;
	}
	return 0;
};

export const checkAllEntriesForSalary = () => {
	let month = document.getElementById('month');
	let monthselect = document.getElementById('monthselect');
	let amount = document.getElementById('amount');
	if (month.value === 'Other') {
		if (monthselect.value === 'noSelection') {
			return 1;
		}
	}
	if (amount.value === '') {
		return 3;
	}
	return 0;
};

export const numberWithCommas = x => {
	let num = x.toString().replace(/\B(?=(\d{2}).(?!\d))/g, ',');
	let lastHalf = num.slice(-4);
	let firstHalf = num.replace(lastHalf, '');
	return firstHalf.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastHalf;
};

let expData = {
	year: '',
	month: '',
	detail: '',
	amount: '',
	mode: '',
};
let allMonths = [
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
let empty = ['Month', 'Detail', 'Amount'];

export const spentHandle = i => {
	let retVal = checkAllEntries();
	if (retVal === 0) {
		expData.year = document.getElementById('yearSelect').value;
		let mth = new Date().getMonth();
		expData.month =
			document.getElementById('month').value === 'Same'
				? allMonths[mth]
				: allMonths[parseInt(document.getElementById('monthselect').value) - 1];
		expData.detail = document.getElementById('detail').value;
		expData.amount = parseInt(document.getElementById('amount').value);
		if (i === '1') {
			expData.amount *= -1;
		}
		expData.mode = document.getElementById('mode').value;
		clearAllFields();
		return expData;
	} else {
		return 0;
	}
};

export const salaryData = i => {
	let retVal = checkAllEntriesForSalary();
	if (retVal === 0) {
		expData.year = document.getElementById('yearSelect').value;
		let mth = new Date().getMonth();
		expData.month =
			document.getElementById('month').value === 'Same'
				? allMonths[mth]
				: allMonths[parseInt(document.getElementById('monthselect').value) - 1];
		if (i === '4') {
			expData.detail = 'Bonus';
		} else {
			expData.detail = 'Salary';
		}
		expData.amount = parseInt(document.getElementById('amount').value);
		expData.mode = document.getElementById('mode').value;
		clearAllFields();
		return expData;
	} else {
		alert(`${empty[retVal - 1]} is empty`);
		return 0;
	}
};

export const addData = mType => {
	let retVal = checkAllEntriesForSalary();
	if (retVal === 0) {
		expData.year = parseInt(document.getElementById('yearSelect').value);
		let mth = new Date().getMonth();
		expData.month =
			document.getElementById('month').value === 'Same'
				? allMonths[mth]
				: allMonths[parseInt(document.getElementById('monthselect').value) - 1];
		expData.detail = mType;
		expData.amount = parseInt(document.getElementById('amount').value);
		expData.mode = document.getElementById('mode').value;
		clearAllFields();
		return expData;
	} else {
		alert(`${empty[retVal - 1]} is empty`);
		return 0;
	}
};
