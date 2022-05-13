import React from 'react';
import { useSelector } from 'react-redux';

import '../Styles/dataDisplay.css';
import FetchEachData from './FetchEachData';

const AllDataDisplay = () => {
	const data = useSelector(state => state.data);
	console.log(data);
	console.log(new Date().getFullYear());
	return (
		<div className='allDataDisplay'>
			<div className='wrap'>
				<table className='head'>
					<tbody>
						<tr>
							<td>Category</td>
							<td>Description</td>
							<td>Minimum Price</td>
							<td>Maximum Price</td>
							<td>Status</td>
						</tr>
					</tbody>
				</table>
				<div className='inner_table' id='innerTable'>
					<table>
						<tbody>
							{data.map(oneData => (
								<tr key={oneData._id} id={oneData._id}>
									<FetchEachData onedata={oneData} />
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default AllDataDisplay;
