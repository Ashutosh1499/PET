import React from 'react';

const FetchEachData = oneData => {
	let parsedData = oneData.onedata;
	let status = '';
	let tdColor = 'red';
	if (parsedData.status === true) {
		status = 'Done';
		tdColor = '#00ABEB';
	} else {
		status = 'Pending';
	}
	return (
		<>
			<td>{parsedData.category}</td>
			<td>{parsedData.description}</td>
			<td>{parsedData.priceMin}</td>
			<td>{parsedData.priceMax}</td>
			<td style={{ borderColor: tdColor, color: tdColor }}>{status}</td>
		</>
	);
};

export default FetchEachData;
