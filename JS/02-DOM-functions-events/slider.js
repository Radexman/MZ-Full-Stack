const slider = document.querySelector('.slider');
const form = document.querySelector('.form');
const slides = document.querySelectorAll('.slide');
let num = Math.floor(Math.random() * 5 + 1);

const changeSlide = () => {
	num++;
	if (num > 5) {
		num = 1;
	}

	slider.style.backgroundImage = `url(./images/slide-${num}.jpg)`;

	setTimeout(() => {
		slider.classList.remove('fade-out');
	}, 500);

	setTimeout(changeSlide, 5000);

	setTimeout(() => {
		slider.classList.add('fade-out');
	}, 4500);
};

const changeSlideClick = (e) => {
	console.log(e.target.value);
	slider.style.backgroundImage = `url(./images/slide-${e.target.value}.jpg)`;
};

form.addEventListener('click', changeSlideClick);

changeSlide();
