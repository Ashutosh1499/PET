import React from 'react';

import expImage from '../../Images/ExpenseTrackSideImage.png';
import transaction from '../../Icons/transaction.png';

const ExpenseHistoryData = () => {
	return (
		<>
			<div className='expHistoryChild' id='expHHist'>
				<div className='expHistoryDataHeader'>
					<div className='expHistoryDataHeaderSpan'>
						<span>Latest Transactions</span>
					</div>
					<div className='expHistoryDataHeaderImg'>
						<img src={transaction} alt='' />
					</div>
				</div>
			</div>
			<div className='expHistoryChild' id='expHList'>
				<div className='expHistoryData'></div>
			</div>
			<div className='expHistoryChild' id='expImg'>
				<img src={expImage} alt='' />
			</div>
		</>
	);
};

export default ExpenseHistoryData;
