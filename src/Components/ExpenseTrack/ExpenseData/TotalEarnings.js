import React from 'react';
import { useSelector } from 'react-redux';
import { numberWithCommas } from './functions';

const TotalEarnings = () => {
	const expList = useSelector(state => state.expList);
	let total = 0;
	expList.forEach(eachExps => {
		if (
			eachExps.amount > 0 &&
			(eachExps.detail === 'Salary' || eachExps.detail === 'Bonus')
		) {
			total += eachExps.amount;
		}
	});
	return <>{numberWithCommas(total)}</>;
};
export default TotalEarnings;
