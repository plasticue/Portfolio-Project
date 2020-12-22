let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.animation.duration = 3000;

let techChart = new Chart(myChart, {
	type: 'bar',
	data: {
		labels: [ 'Html', 'Css', 'JavaScript', 'JQuery', 'React.js', 'WordPress', 'Node.js', 'PHP' ],

		datasets: [
			{
				label: 'Technologies',
				data: [ 8.4, 9.2, 7, 4.4, 2.9, 6.3, 3.8, 6.1 ],
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
				yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
				delay: 300 // delay of 500 ms after the canvas is considered inside the viewport
			}
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						color: '#222222'
					}
				}
			]
		}
	}
});
