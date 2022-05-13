export const checkIfOtherIsSelected = () => {
	let selectedValue = document.getElementById('category').value;
	let otherCategoryTextBox = document.getElementById('otherCategory');
	if (selectedValue === 'Other') {
		otherCategoryTextBox.style.width = '100%';
		otherCategoryTextBox.style.paddingLeft = '10px';
		// otherCategoryTextBox.style.borderLeft = '0.5px solid #afafaf';
	} else {
		otherCategoryTextBox.style.width = '0';
		otherCategoryTextBox.style.paddingLeft = '0';
	}
};

export const clearAllFields = () => {
	document.getElementById('otherCategory').value = '';
	document.getElementById('description').value = '';
	document.getElementById('minPrice').value = '';
	document.getElementById('maxPrice').value = '';
};

export const checkAllEntries = i => {
	if (i === 1) {
		if (document.getElementById('otherCategory').value === '') {
			return true;
		}
	}
	if (
		document.getElementById('minPrice').value === '' &&
		document.getElementById('maxPrice') === ''
	) {
		return true;
	}

	return false;
};
