import React from 'react';

import '../Styles/dataTableStyle.css';
import '../Styles/buttons.css';

const Eachdata = oneData => {
	// const test = oneData;
	console.log(oneData);
	const parseData = oneData.oneData;
	console.log(parseData);
	let status = '';
	let classname = '';
	if (parseData.status) {
		status = 'Done';
		classname = `status-box ${status}`;
	} else {
		status = 'Pending';
		classname = `status-box ${status}`;
	}

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	const updateStatus = () => {
		let id = parseData._id;
		if (document.getElementById(id).className === 'status-box Done') {
			return;
		}
		let blurBody = document.createElement('div');
		blurBody.className = 'blur';
		blurBody.id = 'blurBody';

		let confirmForm = document.createElement('div');
		confirmForm.className = 'confirmForm';
		confirmForm.id = 'confirmForm';

		let confirmButton = document.createElement('input');
		confirmButton.type = 'button';
		confirmButton.value = 'Confirm';
		confirmButton.className = 'confirmButton';

		let cancelButton = document.createElement('input');
		cancelButton.type = 'button';
		cancelButton.value = 'Cancel';
		cancelButton.className = 'cancelButton';
		cancelButton.id = 'cb';

		let dataContainer = document.getElementById('root');

		confirmForm.innerHTML +=
			'<h3>Do you want to change the status From Pending to Done ?</h1>';
		confirmForm.innerHTML += `<h3>For ${parseData.description}(${parseData.priceMin} to ${parseData.priceMax})</h3>`;

		dataContainer.appendChild(blurBody);
		confirmForm.style.transform = 'translate(-50%, -50%) scale(0,0)';
		dataContainer.appendChild(confirmForm);

		confirmForm.appendChild(confirmButton);
		confirmForm.appendChild(cancelButton);
		setTimeout(() => {
			confirmForm.style.transform = 'translate(-50%, -50%) scale(1,1)';
		}, 100);

		cancelButton.onclick = cancel;
		confirmButton.onclick = confirm;
	};
	const confirm = () => {
		let elem = document.getElementById(parseData._id);
		console.log('inside confirm');
		elem.innerHTML = 'Done';
		elem.className = 'status-box anim';
		setTimeout(() => {
			elem.className = 'status-box Done';
		}, 250);
		document.getElementById('blurBody').remove();
		document.getElementById('confirmForm').remove();
		console.log(elem);
		elem.pointerEvents = 'none';
		elem.pointer = 'pointer';
	};
	const cancel = () => {
		document.getElementById('confirmForm').style.transform =
			'translate(-50%, -50%) scale(0,0)';
		setTimeout(() => {
			document.getElementById('blurBody').remove();
			document.getElementById('confirmForm').remove();
		}, 250);
	};

	return (
		<>
			<div className='data-box'>{parseData.category}</div>
			<div className='data-box'>{parseData.description}</div>
			<div className='data-box'>{numberWithCommas(parseData.priceMin)}</div>
			<div className='data-box'>{numberWithCommas(parseData.priceMax)}</div>
			<div className={classname} onClick={updateStatus} id={parseData._id}>
				{status}
			</div>
			<input type='button' value='Delete' className='deleteButton' />
		</>
	);
};

export default Eachdata;
