// Display Current hour in user interface

let timerEl = document.querySelector('.nav__timer');

const displayTime = () => {
	setInterval(() => {
		const date = new Date();

		let hour = date.getHours();
		hour = hour < 10 ? `0${hour}` : hour;

		let minute = date.getMinutes();
		minute = minute < 10 ? `0${minute}` : minute;

		let second = date.getSeconds();
		second = second < 10 ? `0${second}` : second;

		const fullTime = `${hour}:${minute}:${second}`;

		timerEl.textContent = fullTime;
	}, 1000);
};

displayTime();
