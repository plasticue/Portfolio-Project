gsap.registerPlugin(ScrollTrigger);

// Contact Section
gsap.to('#form-section', 0.5, {
	scrollTrigger: {
		trigger: '#form-section',
		start: 'top center'
	},
	opacity: 1,
	delay: 0.3
});

// Navigation Bar
let tl03 = gsap.timeline({
	scrollTrigger: {
		trigger: '.landing',
		start: 'top center',
		end: 'bottom 270px',
		toggleClass: { targets: '.home-on', className: 'active' }
	}
});

let tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.wptheme',
		start: 'top center',
		end: 'bottom 300px',

		toggleClass: { targets: '.btn-on', className: 'active' }
	}
});

let tl04 = gsap.timeline({
	scrollTrigger: {
		trigger: '#lp',
		start: 'top center',
		end: 'bottom 300px',
		toggleClass: { targets: '.lp-on', className: 'active' }
	}
});

let tl02 = gsap.timeline({
	scrollTrigger: {
		trigger: '#javascript',
		start: 'top center',
		toggleClass: { targets: '.js-on', className: 'active' }
	}
});

let tl05 = gsap.timeline({
	scrollTrigger: {
		trigger: '#chart-section',
		start: 'top center',
		end: 'bottom 270px',
		toggleClass: { targets: '.chart-on', className: 'active' }
	}
});

const minWidth02 = 1000; // minimum width of screen
if (window.innerWidth <= minWidth02) {
	// do nothing
} else {
	// continue script

	// hero section

	gsap.to('.hexa02', {
		xPercent: -100,

		ease: 'none',
		scrollTrigger: {
			trigger: '.right-head',
			// start: "top bottom", // the default values
			// end: "bottom top",
			scrub: true
		}
	});
	gsap.to('.hexa03', {
		xPercent: -120,
		yPercent: 100,
		ease: 'none',
		scrollTrigger: {
			trigger: '.right-head',
			// start: "top bottom", // the default values
			// end: "bottom top",
			scrub: true
		}
	});
	gsap.to('.hexa04', {
		xPercent: -70,
		yPercent: 120,
		ease: 'none',
		scrollTrigger: {
			trigger: '.right-head',
			// start: "top bottom", // the default values
			// end: "bottom top",
			scrub: true
		}
	});
	gsap.to('.hexa05', {
		yPercent: 100,
		ease: 'none',
		scrollTrigger: {
			trigger: '.right-head',
			// start: "top bottom", // the default values
			// end: "bottom top",
			scrub: true
		}
	});

	// Text Animation
	const textrev = gsap.timeline();
	textrev.from('.txt-glitch', 1.3, {
		y: 100,
		ease: 'power2',
		delay: 0.4,
		skewY: 10,
		stagger: {
			amount: 0.2
		}
	});
	gsap.to('.gsap-img02', 1.3, {
		scrollTrigger: {
			trigger: '.gsap-img02',
			start: 'top center'
		},
		opacity: 1,
		delay: 0.8
	});

	// Wp section
	const textrev02 = gsap.timeline({
		scrollTrigger: {
			trigger: '.gsap-txt',
			start: 'center bottom'
		}
	});
	textrev02.from('.gsap-txt', 1.4, {
		y: 100,
		delay: 0.3,
		ease: 'power4',
		skewY: 10,
		stagger: {
			amount: 0.4
		}
	});
	const textrev03 = gsap.timeline({
		scrollTrigger: {
			trigger: '.gsap-text02',
			start: 'center bottom'
		}
	});
	textrev03.from('.gsap-text02', 1, {
		y: 100,
		delay: 0.3,
		ease: 'power1',
		skewY: 10,
		stagger: {
			amount: 0.4
		}
	});
	gsap.to('.gsap01', 1.5, {
		scrollTrigger: {
			trigger: '.gsap01',
			ease: 'back',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.3,
		x: -150
	});
	gsap.to('.gsap02', 2, {
		scrollTrigger: {
			trigger: '.gsap02',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.2,
		x: 150
	});
	gsap.to('.gsap03', 2, {
		scrollTrigger: {
			trigger: '.gsap03',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.2,
		x: -150
	});
	gsap.to('.gsap-img04', 2, {
		scrollTrigger: {
			trigger: '.gsap-img04',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.2,
		x: 150
	});
	gsap.to('.gsap-img05', 2, {
		scrollTrigger: {
			trigger: '.gsap-img05',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.2,
		x: -150
	});

	//Landing Pages Section

	gsap.to('.landing-headline', 1.5, {
		scrollTrigger: {
			trigger: '.landing-headline',
			ease: 'back',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.2,
		y: -150
	});
	gsap.to('.landing-gsap02', 1.2, {
		scrollTrigger: {
			trigger: '.landing-gsap02',
			ease: 'power1',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.5,
		y: -150
	});
	gsap.to('.landing-section01', 1, {
		scrollTrigger: {
			trigger: '.landing-section01',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.2,
		y: -150
	});
	gsap.to('.landing-section02', 1.2, {
		scrollTrigger: {
			trigger: '.landing-section02',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.35,
		y: -150
	});
	gsap.to('.landing-section03', 1.4, {
		scrollTrigger: {
			trigger: '.landing-section03',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.5,
		y: -150
	});
	gsap.to('.landing-section04', 1, {
		scrollTrigger: {
			trigger: '.landing-section04',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.2,
		y: -150
	});
	gsap.to('.landing-section05', 1.2, {
		scrollTrigger: {
			trigger: '.landing-section05',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.35,
		y: -150
	});
	gsap.to('.landing-section06', 1.4, {
		scrollTrigger: {
			trigger: '.landing-section06',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.5,
		y: -150
	});
	gsap.to('.landing-section07', 1, {
		scrollTrigger: {
			trigger: '.landing-section07',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.2,
		y: -150
	});
	gsap.to('.landing-section08', 1.2, {
		scrollTrigger: {
			trigger: '.landing-section08',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.35,
		y: -150
	});
	gsap.to('.landing-section09', 1.4, {
		scrollTrigger: {
			trigger: '.landing-section09',
			ease: 'power2',
			start: 'top bottom'
		},
		opacity: 1,
		delay: 0.5,
		y: -150
	});

	// JS Section
	const glitchText = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-glitch-txt',
			start: 'center bottom'
		}
	});
	glitchText.from('.js-glitch-txt', 1.4, {
		y: 100,
		delay: 0.2,
		ease: 'power1',
		skewY: 10,
		stagger: {
			amount: 0.4
		}
	});
	gsap.to('.js-main-p', 1.5, {
		scrollTrigger: {
			trigger: '.js-main-p',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.7
	});
	gsap.to('.gsap-js-img01', 2, {
		scrollTrigger: {
			trigger: '.gsap-js-img01',
			ease: 'power1',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.3,
		x: 150
	});
	gsap.to('.gsap-js-h01', 2.1, {
		scrollTrigger: {
			trigger: '.gsap-js-h01',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		x: -150
	});
	gsap.to('.gsap-js-p01', 1.5, {
		scrollTrigger: {
			trigger: '.gsap-js-p01',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.5
	});
	gsap.to('.gsap-js-img02', 2, {
		scrollTrigger: {
			trigger: '.gsap-js-img02',
			ease: 'power1',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.3,
		x: -150
	});
	gsap.to('.gsap-js-h02', 2.1, {
		scrollTrigger: {
			trigger: '.gsap-js-h02',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		x: 150
	});
	gsap.to('.gsap-js-p02', 1.5, {
		scrollTrigger: {
			trigger: '.gsap-js-p02',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.5
	});
	gsap.to('.gsap-js-img03', 2, {
		scrollTrigger: {
			trigger: '.gsap-js-img03',
			ease: 'power1',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.3,
		x: 150
	});
	gsap.to('.gsap-js-h03', 2.1, {
		scrollTrigger: {
			trigger: '.gsap-js-h03',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		x: -150
	});
	gsap.to('.gsap-js-p03', 1.5, {
		scrollTrigger: {
			trigger: '.gsap-js-p03',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.5
	});
	gsap.to('.gsap-js-img04', 2, {
		scrollTrigger: {
			trigger: '.gsap-js-img04',
			ease: 'power1',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.3,
		x: -150
	});
	gsap.to('.gsap-js-h04', 2.1, {
		scrollTrigger: {
			trigger: '.gsap-js-h04',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		x: 150
	});
	gsap.to('.gsap-js-p04', 1.5, {
		scrollTrigger: {
			trigger: '.gsap-js-p04',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.5
	});
	gsap.to('.gsap-js-img05', 2, {
		scrollTrigger: {
			trigger: '.gsap-js-img05',
			ease: 'power1',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.3,
		x: 150
	});
	gsap.to('.gsap-js-h05', 2.1, {
		scrollTrigger: {
			trigger: '.gsap-js-h05',
			ease: 'power2',
			start: 'center bottom'
		},
		opacity: 1,
		x: -150
	});
	gsap.to('.gsap-js-p05', 1.5, {
		scrollTrigger: {
			trigger: '.gsap-js-p05',
			start: 'center bottom'
		},
		opacity: 1,
		delay: 0.5
	});
	/*
	gsap.to('.gsap-js-img03', 2, {
		scrollTrigger: '.gsap-js-img03',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: 150,
		start: 'top center'
	});
	gsap.to('.gsap-js-h03', 2.1, {
		scrollTrigger: '.gsap-js-h03',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: -150,
		start: 'top center'
	});
	gsap.to('.gsap-js-p03', 2, {
		scrollTrigger: '.gsap-js-p03',
		ease: 'power1',
		opacity: 1,
		delay: 0.2,
		start: 'top center'
	});
	gsap.to('.gsap-js-img04', 2, {
		scrollTrigger: '.gsap-js-img04',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: -150,
		start: 'top center'
	});
	gsap.to('.gsap-js-h04', 2.1, {
		scrollTrigger: '.gsap-js-h04',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: 150,
		start: 'top center'
	});
	gsap.to('.gsap-js-p04', 2, {
		scrollTrigger: '.gsap-js-p04',
		ease: 'power1',
		opacity: 1,
		delay: 0.2,
		start: 'top center'
	});
	gsap.to('.gsap-js-img05', 2, {
		scrollTrigger: '.gsap-js-img05',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: 150,
		start: 'top center'
	});
	gsap.to('.gsap-js-h05', 2.1, {
		scrollTrigger: '.gsap-js-h05',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: -150,
		start: 'top center'
	});
	gsap.to('.gsap-js-p05', 2, {
		scrollTrigger: '.gsap-js-p05',
		ease: 'power1',
		opacity: 1,
		delay: 0.2,
		start: 'top center'
	});


*/
}
