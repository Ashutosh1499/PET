import React, { Component } from 'react';
import AllDataDisplay from '../DisplayData/AllDataDisplay';
import DataEntryFields from '../Fields/DataEntryFields';
import UnderMaintainence from '../UnderMaintainence';

import '../Styles/sidebar.css';
import Heading from '../ExpenseTrack/Heading';
import ExpenseEntryFields from '../ExpenseTrack/ExpenseEntryFields';
import ExpDataDisplay from '../ExpenseTrack/ExpDataDisplay';

class Sidebar extends Component {
	constructor() {
		super();
		this.state = {
			content1: <Heading />,
			content2: <ExpenseEntryFields />,
			content3: <ExpDataDisplay />,
		};
	}
	tabSwitch = tid => {
		for (let i = 1; i <= 5; i++) {
			document.getElementById(`tb${i}an`).style.transitionDuration = '0s';
			document.getElementById(`tb${i}an`).style.width = '0%';
			document.getElementById(`tb${i}txt`).style.color = 'black';
		}
		document.getElementById(`tb${tid}an`).style.transitionDuration = '0.5s';
		document.getElementById(`tb${tid}an`).style.width = '75%';
		document.getElementById(`tb${tid}txt`).style.color = 'white';
		if (tid === '1') {
			this.setState({
				content1: <Heading />,
				content2: <ExpenseEntryFields />,
				content3: <ExpDataDisplay />,
			});
		}
		if (tid === '2') {
			this.setState({
				content1: <UnderMaintainence />,
				content2: '',
				content3: '',
			});
		}
		if (tid === '3') {
			this.setState({
				content1: <UnderMaintainence />,
				content2: '',
				content3: '',
			});
		}
		if (tid === '4') {
			this.setState({
				content1: <DataEntryFields />,
				content2: <AllDataDisplay />,
				content3: '',
			});
		}
		if (tid === '5') {
			this.setState({
				content1: <UnderMaintainence />,
				content2: '',
				content3: '',
			});
		}
	};
	render() {
		return (
			<div className='contents'>
				<div className='sidebar' id='sidebar'>
					<div className='profile'></div>
					<div className='allTabs'>
						<div className='tab' id='tb1'>
							<div className='tabAnim onState' id='tb1an'></div>
							<span id='tb1txt' onClick={() => this.tabSwitch('1')}>
								Home
							</span>
						</div>
						<div className='tab' id='tb2'>
							<div className='tabAnim' id='tb2an'></div>
							<span id='tb2txt' onClick={() => this.tabSwitch('2')}>
								Catagories
							</span>
						</div>
						<div className='tab' id='tb3'>
							<div className='tabAnim' id='tb3an'></div>
							<span id='tb3txt' onClick={() => this.tabSwitch('3')}>
								Analysis
							</span>
						</div>
						<div className='tab' id='tb4'>
							<div className='tabAnim' id='tb4an'></div>
							<span id='tb4txt' onClick={() => this.tabSwitch('4')}>
								My Desires
							</span>
						</div>
						<div className='tab' id='tb5'>
							<div className='tabAnim' id='tb5an'></div>
							<span id='tb5txt' onClick={() => this.tabSwitch('5')}>
								About
							</span>
						</div>
					</div>
				</div>
				<div className='midContents'>
					{this.state.content1}
					{this.state.content2}
					{this.state.content3}
				</div>
			</div>
		);
	}
}
export default Sidebar;
