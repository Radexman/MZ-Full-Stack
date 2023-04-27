const form = document.getElementById('form');
const numberInput = document.getElementById('number');
const output = document.getElementById('output');

const checkValue = (e) => {
	e.preventDefault();

	const number = Number(numberInput.value);
	let msg;

	if (number === 0) {
		msg = 'Number is 0.';
	} else if (number > 0) {
		msg = 'Number is positive.';
	} else if (number < 0) {
		msg = 'Number is neative.';
	} else if (number !== isNaN) {
		msg = 'Please enter a number.';
	}

	output.textContent = msg;
};

form.addEventListener('submit', checkValue);
