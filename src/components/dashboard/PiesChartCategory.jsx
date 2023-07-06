import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
	responsive: true,
	maintainAspectRatio: false,
};

var data = {
	labels: ['Ecuador', 'Colombia', 'Argentina', 'España', 'Chile'],
	datasets: [
		{
			label: 'country of origin',
			data: [35, 20, 20, 15, 10, 30],
			backgroundColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
			],
			borderWidth: 1,
		},
	],
};
export const PiesChartCountry = () => {
	return (
		<div>
			<Pie
				data={data}
				options={options}
			/>
		</div>
	);
};
