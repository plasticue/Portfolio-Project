// Contact Section
gsap.to('#form-section', 0.8, {
	scrollTrigger: '#form-section',
	ease: 'power1',
	opacity: 1,
	delay: 0.1,
	start: 'top center'
});

// hero section

var minWidth = 1000; // minimum width of screen
if (window.innerWidth <= minWidth) {
	// do nothing
} else {
	// continue script

	let tl03 = gsap.timeline({
		scrollTrigger: {
			trigger: '.landing',
			start: 'top center',
			end: 'bottom 300px',
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

	let tl02 = gsap.timeline({
		scrollTrigger: {
			trigger: '#javascript',
			start: 'top center',
			toggleClass: { targets: '.js-on', className: 'active' }
		}
	});

	// Text Animation
	const textrev = gsap.timeline();
	textrev.from('.txt-glitch', 1.6, {
		y: 100,
		ease: 'power2',
		delay: 0.2,
		skewY: 10,
		stagger: {
			amount: 0.2
		}
	});

	const glitchText = gsap.timeline({
		scrollTrigger: {
			trigger: '.js-glitch-txt',
			start: 'top bottom'
		}
	});

	glitchText.from('.js-glitch-txt', 1.6, {
		y: 100,
		ease: 'power2',
		delay: 0.2,
		skewY: 10,
		stagger: {
			amount: 0.2
		}
	});

	// Wp section
	const textrev02 = gsap.timeline({
		scrollTrigger: {
			trigger: '.gsap-txt',
			start: 'top bottom'
		}
	});

	textrev02.from('.gsap-txt', 1.4, {
		y: 100,
		ease: 'power4',
		delay: 0.2,
		skewY: 10,
		stagger: {
			amount: 0.4
		}
	});

	const textrev03 = gsap.timeline({
		scrollTrigger: {
			trigger: '.gsap-text02',
			start: 'top bottom'
		}
	});

	textrev03.from('.gsap-text02', 1.4, {
		y: 100,
		ease: 'power4',
		delay: 0.3,
		skewY: 10,
		stagger: {
			amount: 0.4
		}
	});
	gsap.to('.gsap-img01', 3, {
		scrollTrigger: '.gsap-img01',
		ease: 'power1',
		opacity: 1,
		delay: 0.7,
		start: 'top center'
	});
	gsap.to('.gsap-img02', 2.5, {
		scrollTrigger: '.gsap-img02',
		ease: 'power1',
		opacity: 1,
		delay: 0.4,
		start: 'top center'
	});

	gsap.to('.gsap01', 1.5, {
		scrollTrigger: '.gsap01',
		ease: 'back',
		opacity: 1,
		delay: 0.5,
		x: -150,
		start: 'top center',
		scrub: 1
	});

	gsap.to('.gsap02', 2, {
		scrollTrigger: '.gsap02',
		ease: 'bounce',
		opacity: 1,
		delay: 0.4,
		x: 150,
		start: 'top center'
	});

	gsap.to('.gsap03', 2, {
		scrollTrigger: '.gsap03',
		ease: 'bounce',
		opacity: 1,
		delay: 0.4,
		x: -150,
		start: 'top center'
	});
	gsap.to('.gsap-img04', 2, {
		scrollTrigger: '.gsap-img04',
		ease: 'bounce',
		opacity: 1,
		delay: 0.4,
		x: 150,
		start: 'top center'
	});

	gsap.to('.gsap-img05', 2, {
		scrollTrigger: '.gsap-img05',
		ease: 'bounce',
		opacity: 1,
		delay: 0.4,
		x: -150,
		start: 'top center'
	});

	// JS section
	gsap.to('.js-main-p', 2, {
		scrollTrigger: '.js-main-p',
		ease: 'power1',
		opacity: 1,
		delay: 0.5,
		start: 'top center'
	});
	gsap.to('.gsap-js-img01', 2, {
		scrollTrigger: '.gsap-js-img01',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: 150,
		start: 'top center'
	});
	gsap.to('.gsap-js-h01', 2.1, {
		scrollTrigger: '.gsap-js-h01',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: -150,
		start: 'top center'
	});
	gsap.to('.gsap-js-p01', 2, {
		scrollTrigger: '.gsap-js-p01',
		ease: 'power1',
		opacity: 1,
		delay: 0.2,
		start: 'top center'
	});
	gsap.to('.gsap-js-img02', 2, {
		scrollTrigger: '.gsap-js-img02',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: -150,
		start: 'top center'
	});
	gsap.to('.gsap-js-h02', 2.1, {
		scrollTrigger: '.gsap-js-h02',
		ease: 'power2',
		opacity: 1,
		delay: 0.4,
		x: 150,
		start: 'top center'
	});
	gsap.to('.gsap-js-p02', 2, {
		scrollTrigger: '.gsap-js-p02',
		ease: 'power1',
		opacity: 1,
		delay: 0.2,
		start: 'top center'
	});
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
}
