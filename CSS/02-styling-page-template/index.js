const hamburgerMenu = document.querySelector('.hamburger');
const navlinks = document.querySelectorAll('.navlinks-top-navlink');
const navbar = document.querySelector('.navbar');

const toggleMenu = () => {
	document.querySelector('.navlinks-top').classList.toggle('navbar-top-active');
	document.querySelector('.bar:nth-child(2)').classList.toggle('bar-active');
	document.querySelector('.bar:nth-child(1)').classList.toggle('bar-active-two');
	document.querySelector('.bar:nth-child(3)').classList.toggle('bar-active-three');
};

hamburgerMenu.addEventListener('click', toggleMenu);

navlinks.forEach((link) => {
	link.addEventListener('click', () => {
		document.querySelector('.navlinks-top').classList.remove('navbar-top-active');

		document.querySelector('.bar:nth-child(2)').classList.remove('bar-active');
		document.querySelector('.bar:nth-child(1)').classList.remove('bar-active-two');
		document.querySelector('.bar:nth-child(3)').classList.remove('bar-active-three');
	});
});
