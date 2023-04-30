const slider = document.querySelector('.slider');
let num = Math.floor(Math.random() * 5 + 1);

const changeSlide = () => {
	num++;
	if (num > 5) {
		num = 1;
	}

	slider.style.backgroundImage = `url(./images/slide-${num}.jpg)`;

	setTimeout(changeSlide, 5000);
};

changeSlide();
