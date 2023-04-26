const hamburgerMenu = document.querySelector('.hamburger');

const toggleMenu = () => {
	document.querySelector('.navlinks-top').classList.toggle('navbar-top-active');
	document.querySelector('.bar:nth-child(2)').classList.toggle('bar-active');
	document.querySelector('.bar:nth-child(1)').classList.toggle('bar-active-two');
	document.querySelector('.bar:nth-child(3)').classList.toggle('bar-active-three');
};

hamburgerMenu.addEventListener('click', toggleMenu);
