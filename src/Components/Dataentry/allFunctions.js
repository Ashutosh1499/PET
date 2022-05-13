// import Add from './DataEntry';
export const checkIfOtherIsSelected = () => {
	let ele = document.getElementById('tb1');
	if (document.getElementById('ctgry').value === 'Other') {
		ele.className = 'btxt';
	} else {
		ele.className = 'hdn';
	}
};

export const addItems = i => {
	clear();
	document.getElementById(`alrt${i}`).style.opacity = '0.5';
	setTimeout(() => {
		document.getElementById(`alrt${i}`).style.opacity = '0';
	}, 2500);
	// Add.handleAdd();
};

export const clear = () => {
	document.getElementById('tb2').value = '';
	document.getElementById('tb3').value = '';
	document.getElementById('tb4').value = '';
};

export const checkAllEntries = () => {
	if (checkEntry('2')) {
		emptyFieldError('2');
		return true;
	}

	if (checkEntry('3')) {
		emptyFieldError('3');
		return true;
	}

	if (checkEntry('4')) {
		emptyFieldError('4');
		return true;
	}

	return false;
};

export const checkEntry = i => {
	if (document.getElementById(`tb${i}`).value === '') {
		return true;
	}
};

const displayErrorForEmptyField = i => {
	document.getElementById(`tb${i}`).className = 'redError';
	setTimeout(() => {
		document.getElementById(`tb${i}`).className = 'btxt';
	}, 500);
};

export const emptyFieldError = i => {
	displayErrorForEmptyField(i);
};
