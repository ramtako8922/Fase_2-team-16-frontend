import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

var user = [0, 56, 20, 36, 80, 40, 30, 20, 25, 30, 12, 60];
var meses = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
];

var midata = {
	labels: meses,
	datasets: [
		// Cada una de las líneas del gráfico
		{
			label: 'user register',
			data: user,
			tension: 0.5,
			fill: true,
			borderColor: 'rgb( 247, 220, 22  )',
			backgroundColor: 'rgba(247, 220, 111  )',
			pointRadius: 2,
			pointBorderColor: 'rgb(202, 111, 30 )',
			pointBackgroundColor: 'rgb(202, 111, 30 )',
		},
	],
};

var misoptions = {
	scales: {
		y: {
			min: 0,
			grid: { color: 'rgb(253, 254, 254  )' },
		},
		x: {
			ticks: { color: 'rgb(23, 32, 42 )' },
			grid: { color: 'rgb(253, 254, 254  )' },
		},
	},
};

export default function LinesChart() {
	return (
		<Line
			data={midata}
			options={misoptions}
		/>
	);
}
