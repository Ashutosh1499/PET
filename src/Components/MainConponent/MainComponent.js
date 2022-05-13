import React, { Component } from 'react';

import Sidebar from '../NavBar/Sidebar';

import '../Styles/basic.css';

class MainComponent extends Component {
	constructor() {
		super();
		this.state = {
			content1: '',
		};
		setTimeout(() => {
			let ele = document.getElementById('wscreen');
			ele.style.opacity = 0;
			setTimeout(() => {
				ele.style.display = 'none';
			}, 300);
		}, 10);
	}

	userLogin = () => {
		let uid = document.getElementById('uid').value;
		let pass = document.getElementById('pass').value;
		if (uid === '' && pass === '') {
			document.getElementById('greet').style.display = 'block';
			document.getElementById('login-form').style.display = 'none';
			setTimeout(() => {
				document.getElementById('greet').style.display = 'none';
				this.setState({
					content1: <Sidebar />,
				});
			}, 1200);
			console.log('success');
		} else {
			console.log('failed');
		}
	};

	render() {
		return (
			<>
				<div className='login-form' id='login-form'>
					<div className='content' id='login-page-fields'>
						<div className='input-field'>
							<input
								type='text'
								id='uid'
								placeholder='User Id'
								autoComplete='on'
							/>
						</div>
						<div className='input-field'>
							<input
								type='password'
								name=''
								id='pass'
								placeholder='Password'
								autoComplete='on'
							/>
						</div>
					</div>
					<div className='action' id='login-page-buttons'>
						<button onClick={() => this.userLogin()}>Login</button>
						<button>Demo</button>
					</div>
				</div>
				{/* <div className='login-page' id='login-page'>
					<input type='text' name='' id='uid' />
					<input type='text' name='' id='pass' />
					<input type='button' onClick={() => this.userLogin()} value='Login' />
					<input type='button' value='Demo' />
				</div> */}
				{this.state.content1}
			</>
		);
	}
}
export default MainComponent;
