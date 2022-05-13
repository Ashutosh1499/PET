import React, { Component } from 'react';

import '../Styles/basic.css';
import '../Styles/topnav.css';
import '../Styles/analyse.css';

import icon from '../Images/target.ico';
import Dataentry from '../Dataentry/Dataentry';
import Alldata from '../Data/Alldata';
import Analysedata from '../Analysis/Analysedata';
import Loading from '../Data/Loading';

class Topnav extends Component {
	constructor() {
		super();
		this.state = {
			content1: <Dataentry></Dataentry>,
			content2: <Alldata></Alldata>,
			content3: '',
		};
	}
	showHome = () => {
		this.setState({
			content1: <Dataentry></Dataentry>,
			content2: <Alldata></Alldata>,
		});
	};
	showAnalyse = () => {
		this.setState({
			content1: <Analysedata></Analysedata>,
			content2: '',
		});
	};
	showLoading = () => {
		this.setState({
			content1: <Loading></Loading>,
			content2: '',
			content3: '',
		});
	};
	render() {
		return (
			<div>
				<div className='topnav' id='topnav'>
					<div className='analysis' id='analysis'>
						<h2 onClick={this.showHome}>Home</h2>
						<h2 onClick={this.showAnalyse}>Analyse</h2>
						<h2 onClick={this.showLoading}>Edit</h2>
					</div>
					<div id='topnavIcon'>
						<img src={icon} alt='' />
					</div>
					<div className='alrt' id='alrt1'>
						Added Successfully
					</div>
					<div className='alrt rd' id='alrt2'>
						Deleted Successfully
					</div>
					<div className='alrt wt' id='alrt3'>
						Modified Successfully
					</div>
				</div>
				{this.state.content1}
				{this.state.content2}
				{this.state.content3}
			</div>
		);
	}
}
export default Topnav;
