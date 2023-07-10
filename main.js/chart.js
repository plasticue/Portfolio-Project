let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.animation.duration = 3000;

let techChart = new Chart(myChart, {
	type: 'bar',
	data: {
		labels: ['Css/Sass', 'JavaScript', 'React.js', 'TypeScript', 'WordPress', 'PHP', 'Laravel', 'Node.js',],

		datasets: [
			{
				label: 'Technologies',
				data: [9.4, 9.2, 7.2, 6.4, 9.6, 8.7, 6.9, 8.2],
				backgroundColor: [
					'#656565',
					'#767676',
					'#494949',
					'#333333',
					'#202020',
					'#454545',
					'#303030',
					'#414141'
				],
				color: '#101010',
				hoverBackgroundColor: '#909090'
			}
		]
	},
	options: {
		title: {
			display: true,
			text: "Chart of Technologies That I'm Working With",
			fontColor: '#78bcece6',
			fontSize: 16,
			padding: 20
		},
		plugins: {
			deferred: {
				xOffset: 100, // defer until 150px of the canvas width are inside the viewport
				yOffset: '80%', // defer until 50% of the canvas height are inside the viewport
				delay: 300 // delay of 500 ms after the canvas is considered inside the viewport
			}
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						color: '#222222'
					},
					ticks: {
						min: 1,
						max: 10
					}
				}
			]
		}
	}
});
