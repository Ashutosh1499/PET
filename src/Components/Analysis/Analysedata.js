import React from 'react';
import { Bar, HorizontalBar, Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Loading from '../Data/Loading';

const Analysedata = () => {
	const alldata = useSelector(state => state.data);

	let electronicsCount = [0, 0, 0, 0];
	let homeCount = [0, 0, 0, 0];
	let musicalCount = [0, 0, 0, 0];
	let travelCount = [0, 0, 0, 0];
	let otherCount = [0, 0, 0, 0];

	alldata.forEach(indivData => {
		switch (indivData.category) {
			case 'Electronics':
				if (indivData.status === true) {
					electronicsCount[1] += 1;
				} else {
					electronicsCount[0] += 1;
				}
				electronicsCount[2] += indivData.priceMin;
				electronicsCount[3] += indivData.priceMax;
				break;
			case 'Musical':
				if (indivData.status === true) {
					musicalCount[1] += 1;
				} else {
					musicalCount[0] += 1;
				}
				musicalCount[2] += indivData.priceMin;
				musicalCount[3] += indivData.priceMax;
				break;
			case 'Home':
				if (indivData.status === true) {
					homeCount[1] += 1;
				} else {
					homeCount[0] += 1;
				}
				homeCount[2] += indivData.priceMin;
				homeCount[3] += indivData.priceMax;
				break;
			case 'Travel':
				if (indivData.status === true) {
					travelCount[1] += 1;
				} else {
					travelCount[0] += 1;
				}
				travelCount[2] += indivData.priceMin;
				travelCount[3] += indivData.priceMax;
				break;
			default:
				if (indivData.status === true) {
					otherCount[1] += 1;
				} else {
					otherCount[0] += 1;
				}
				otherCount[2] += indivData.priceMin;
				otherCount[3] += indivData.priceMax;
				break;
		}
	});

	const pendingData = [
		electronicsCount[0],
		musicalCount[0],
		travelCount[0],
		homeCount[0],
		otherCount[0],
	];

	const doneData = [
		electronicsCount[1],
		musicalCount[1],
		travelCount[1],
		homeCount[1],
		otherCount[1],
	];

	const total = [
		electronicsCount[0] + electronicsCount[1],
		musicalCount[0] + musicalCount[1],
		travelCount[0] + travelCount[1],
		homeCount[0] + homeCount[1],
		otherCount[0] + otherCount[1],
	];

	const minPrice = [
		electronicsCount[2],
		musicalCount[2],
		travelCount[2],
		homeCount[2],
		otherCount[2],
	];

	const maxPrice = [
		electronicsCount[3],
		musicalCount[3],
		travelCount[3],
		homeCount[3],
		otherCount[3],
	];

	const avgPrice = [
		(minPrice[0] + maxPrice[0]) / 2,
		(minPrice[1] + maxPrice[1]) / 2,
		(minPrice[2] + maxPrice[2]) / 2,
		(minPrice[3] + maxPrice[3]) / 2,
		(minPrice[4] + maxPrice[4]) / 2,
	];

	return !alldata.length ? (
		<Loading></Loading>
	) : (
		<div className='allCharts'>
			<div className='barChart1'>
				<Bar
					data={{
						labels: ['Electronics', 'Musical', 'Travel', 'Home', 'Other'],
						datasets: [
							{
								label: 'Pending',
								data: pendingData,
								backgroundColor: 'red',
								color: 'white',
								fontColor: 'white',
								borderWidth: 1,
							},
							{
								label: 'Done',
								data: doneData,
								backgroundColor: 'rgb(127, 255, 212)',
							},
						],
					}}
					height={400}
					width={600}
					options={{
						maintainAspectRatio: false,
						scales: {
							yAxes: [
								{
									ticks: {
										beginAtZero: true,
									},
									gridLines: {
										display: true,
									},
								},
							],
							xAxes: [
								{
									ticks: {
										beginAtZero: true,
									},
									gridLines: {
										display: false,
									},
								},
							],
						},
						legend: {
							display: true,
						},
					}}
				/>
			</div>
			<div className='pieChart1'>
				<Doughnut
					data={{
						labels: ['Electronics', 'Musical', 'Travel', 'Home', 'Other'],
						datasets: [
							{
								label: 'No of Items in each Category',
								data: total,
								backgroundColor: [
									'#b91d47',
									'#00aba9',
									'#2b5797',
									'#e8c3b9',
									'#1e7145',
								],
							},
						],
					}}
					height={400}
					width={600}
					options={{
						maintainAspectRatio: false,
						scales: {
							yAxes: [
								{
									display: false,
									ticks: {
										beginAtZero: true,
									},
									gridLines: {
										display: false,
									},
								},
							],
						},
					}}
				/>
			</div>
			<div className='barChart3'>
				<Bar
					data={{
						labels: ['Electronics', 'Musical', 'Travel', 'Home', 'Other'],
						datasets: [
							{
								label: 'Average Price',
								data: avgPrice,
								backgroundColor: 'rgb(255, 99, 132)',
								color: 'white',
								fontColor: 'white',
								borderWidth: 1,
							},
						],
					}}
					height={400}
					width={600}
					options={{
						maintainAspectRatio: false,
						scales: {
							yAxes: [
								{
									ticks: {
										beginAtZero: true,
									},
								},
							],
							xAxes: [
								{
									ticks: {
										beginAtZero: true,
									},
									gridLines: {
										display: false,
									},
								},
							],
						},
						legend: {
							labels: {
								fontSize: 15,
							},
						},
					}}
				/>
			</div>
			<div className='lineChart1'>
				<HorizontalBar
					data={{
						labels: [
							'Electronics',
							'Musical',
							'Travel',
							'Home',
							'Other',
							'Space',
						],
						datasets: [
							{
								label: 'No of Items',
								data: [
									[minPrice[0], maxPrice[0]],
									[minPrice[1], maxPrice[1]],
									[minPrice[2], maxPrice[2]],
									[minPrice[3], maxPrice[3]],
									[minPrice[4], maxPrice[4]],
								],
								backgroundColor: 'rgb(255, 99, 132)',
								color: 'white',
								fontColor: 'white',
								borderWidth: 1,
							},
						],
					}}
					height={400}
					width={600}
					options={{
						maintainAspectRatio: false,
						scales: {
							yAxes: [
								{
									ticks: {
										beginAtZero: true,
									},
								},
							],
							xAxes: [
								{
									ticks: {
										beginAtZero: true,
									},
								},
							],
						},
						legend: {
							labels: {
								fontSize: 15,
							},
						},
					}}
				/>
			</div>
		</div>
	);
};

export default Analysedata;
