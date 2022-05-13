import React, { Component } from 'react';

import '../Styles/expdatadisplay.css';

import money from '../Icons/Money.png';
import wallet from '../Icons/Wallet.png';
import maintenance from '../Images/Maintenance.jpg';

import TotalEarnings from './ExpenseData/TotalEarnings';
import CurrentBalance from './ExpenseData/CurrentBalance';
import ExpenseHistoryData from './ExpenseData/ExpenseHistoryData';
import MiniDetial11 from './ExpenseData/MiniDetail1';

class ExpDataDisplay extends Component {
	render() {
		return (
			<div className='expDataDisplay'>
				<div className='expDetails'>
					<div className='expGraph'>
						<img src={maintenance} alt='Maintenance' />
						<div className='UMInfo'>
							<span>Under Maintenance</span>
							<div className='UMInfodetail'>
								This feature will be available very soon to all.
							</div>
						</div>
					</div>
					<div className='expData'>
						<div className='expData1'>
							<div className='cardImage'>
								<img src={money} alt='' />
							</div>
							<div className='cardHeading'>Total Earned</div>
							<div className='balDisplay'>
								₹<span id='value1'>{<TotalEarnings />}</span>/-
							</div>
							<div className='miniDetialsHeadings'>
								<div id='hd1'>Last Month Salary</div>
								<div id='hd2'>Avg Salary/Month</div>
							</div>
							<div className='miniDetials'>{<MiniDetial11 />}</div>
						</div>
						<div className='expData2'>
							<div className='cardImage'>
								<img src={wallet} alt='' />
							</div>
							<div className='cardHeading'>Current Account balance</div>
							<div className='balDisplay'>
								₹<span id='value2'>{<CurrentBalance />}</span>/-
							</div>
							<div className='miniDetialsHeadings'>
								<div id='hd3'>Last Month Expense</div>
								<div id='hd4'>Avg Expense/Month</div>
							</div>
							<div className='miniDetials'>
								<div id='amountDisplay3'></div>
								<div id='amountDisplay4'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='expHistory'>
					<ExpenseHistoryData />
				</div>
			</div>
		);
	}
}

export default ExpDataDisplay;
