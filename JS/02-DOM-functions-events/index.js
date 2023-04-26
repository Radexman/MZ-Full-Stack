const numberInput = document.getElementById('number');
const form = document.getElementById('form');
let output = document.getElementById('task-output');

const displayOutput = (e) => {
	e.preventDefault();

	if (numberInput.value === '0') {
		output.textContent = 'Number is 0.';
	} else if (numberInput.value === '') {
		output.textContent = 'Please enter a number.';
	} else if (numberInput.value > '0') {
		output.textContent = 'Number is positive.';
	} else if (numberInput.value < '0') {
		output.textContent = 'Number is negative.';
	}
};

form.addEventListener('submit', displayOutput);
