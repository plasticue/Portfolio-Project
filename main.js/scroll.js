$('#navbar a, .wp-btn, #hamb a, #ln a').on('click', function(e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top - 120
			},
			900
		);
	}
});
