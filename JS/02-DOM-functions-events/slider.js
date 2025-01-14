const slider = document.querySelector('.slider');
const form = document.querySelector('.form');
let num = Math.floor(Math.random() * 5 + 1);
let timerOne;
let timerTwo;
let timerThree;

const changeSlide = () => {
	num++;
	if (num > 5) {
		num = 1;
	}

	slider.style.backgroundImage = `url(./images/slide-${num}.jpg)`;

	timerThree = setTimeout(() => {
		slider.classList.remove('fade-out');
	}, 500);

	timerOne = setTimeout(changeSlide, 5000);

	timerTwo = setTimeout(() => {
		slider.classList.add('fade-out');
	}, 4500);
};

const changeSlideClick = (e) => {
	console.log(e.target.value);
	slider.style.backgroundImage = `url(./images/slide-${e.target.value}.jpg)`;
	clearTimeout(timerOne);
	clearTimeout(timerTwo);
	clearTimeout(timerThree);

	changeSlide();
};

form.addEventListener('click', changeSlideClick);

changeSlide();
