const form = document.getElementById('form');
const numberInput = document.getElementById('number');

const checkValue = (e) => {
	e.preventDefault();

	const number = Number(numberInput.value);
	let output = document.getElementById('output');

	if (number === 0) {
		output.textContent = 'Number is 0.';
	} else if (number > 0) {
		output.textContent = 'Number is positive.';
	} else if (number < 0) {
		output.textContent = 'Number is neative.';
	} else if (number !== isNaN) {
		output.textContent = 'Please enter a number.';
	}
};

form.addEventListener('submit', checkValue);
