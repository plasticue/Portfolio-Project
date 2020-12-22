let index = 0;
let slides = document.querySelectorAll('.slides');
let dot = document.querySelectorAll('.dot');

function changeSlide() {
	if (index < 0) {
		index = slides.length -let
	}

	if (index > slides.length - 1) {
		index = 0;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
		dot[i].classList.remove('active02');
	}

	slides[index].style.display = 'block';
	dot[index].classList.add('active02');

	index++;

	setTimeout(changeSlide, 2500);
}

changeSlide();

let index02 = 0;
let slides02 = document.querySelectorAll('.slides02');
let dot02 = document.querySelectorAll('.dot02');

function changeSlide02() {
	if (index02 < 0) {
		index02 = slides02.length - 1;
	}

	if (index02 > slides02.length - 1) {
		index02 = 0;
	}

	for (let i = 0; i < slides02.length; i++) {
		slides02[i].style.display = 'none';
		dot02[i].classList.remove('active02');
	}

	slides02[index02].style.display = 'block';
	dot02[index02].classList.add('active02');

	index02++;

	setTimeout(changeSlide02, 2500);
}

changeSlide02();

let index03 = 0;
let slides03 = document.querySelectorAll('.slides03');
let dot03 = document.querySelectorAll('.dot03');

function changeSlide03() {
	if (index03 < 0) {
		index03 = slides03.length - 1;
	}

	if (index03 > slides03.length - 1) {
		index03 = 0;
	}

	for (let i = 0; i < slides03.length; i++) {
		slides03[i].style.display = 'none';
		dot03[i].classList.remove('active02');
	}

	slides03[index03].style.display = 'block';
	dot03[index03].classList.add('active02');

	index03++;

	setTimeout(changeSlide03, 2500);
}

changeSlide03();

/*

let index04 = 0;
let slides04 = document.querySelectorAll('.slides04');
let dot04 = document.querySelectorAll('.dot04');

function changeSlide04() {
	if (index04 < 0) {
		index04 = slides04.length - 1;
	}

	if (index04 > slides04.length - 1) {
		index04 = 0;
	}

	for (let i = 0; i < slides04.length; i++) {
		slides04[i].style.display = 'none';
		dot04[i].classList.remove('active02');
	}

	slides04[index04].style.display = 'block';
	dot04[index04].classList.add('active02');

	index04++;

	setTimeout(changeSlide04, 2500);
}

changeSlide04();
*/