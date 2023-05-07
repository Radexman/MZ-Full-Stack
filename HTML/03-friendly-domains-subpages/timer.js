// Display Current hour and year in user interface

let timerEl = document.querySelector('.nav__timer');

const getTime = () => {
	const date = new Date();

	let hour = date.getHours();
	hour = hour < 10 ? `0${hour}` : hour;

	let minute = date.getMinutes();
	minute = minute < 10 ? `0${minute}` : minute;

	let second = date.getSeconds();
	second = second < 10 ? `0${second}` : second;

	const fullTime = `${hour}:${minute}:${second}`;

	return fullTime;
};

const getFullYear = () => {
	const date = new Date();
	const currentYear = date.getFullYear();

	return currentYear;
};

const displayTime = () => {
	timerEl.textContent = getTime();

	setInterval(() => {
		timerEl.textContent = getTime();
	}, 1000);
};

document.addEventListener('DOMContentLoaded', displayTime);
document.querySelector('#current-year').textContent = getFullYear();
