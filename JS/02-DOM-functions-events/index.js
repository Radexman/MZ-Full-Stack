// Inputs accept integer and first has to be bigger than second
// On click show number range ascending

const form = document.getElementById('form');
const numberOneInput = document.getElementById('number-one');
const numberTwoInput = document.getElementById('number-two');
const output = document.getElementById('output');

const displayRange = (e) => {
	e.preventDefault();

	const numOne = Number(numberOneInput.value);
	const numTwo = Number(numberTwoInput.value);
	let msg;

	if (!numberOneInput.value || !numberTwoInput.value) {
		msg = 'Please enter numbers.';
	} else if (numOne > numTwo) {
		msg = 'First number has to be smaller than second.';
	} else if (numOne < numTwo) {
		const range = [];
		let i = numOne;

		while (i < numTwo) {
			range.push(i);
			i++;
		}
		msg = range;
	}

	output.textContent = msg;
};

form.addEventListener('submit', displayRange);
