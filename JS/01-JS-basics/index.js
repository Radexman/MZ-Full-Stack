const displayTimer = () => {
	const today = new Date();

	let hours = today.getHours();
	hours = hours < 10 ? `0${hours}` : hours;

	let minutes = today.getMinutes();
	minutes = minutes < 10 ? `0${minutes}` : minutes;

	let seconds = today.getSeconds();
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	const currentTime = `${hours}:${minutes}:${seconds}`;

	document.querySelector('#timer').textContent = currentTime;
};

setInterval(displayTimer, 1000);
