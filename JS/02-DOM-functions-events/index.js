// All DOM elements
const form = document.getElementById('form');
const numberOneInput = document.getElementById('number-one');
const numberTwoInput = document.getElementById('number-two');
const output = document.getElementById('output');

// Submit event handles
const displayRange = (e) => {
	e.preventDefault();

	const numOne = Math.round(Number(numberOneInput.value));
	const numTwo = Math.round(Number(numberTwoInput.value));
	let msg;

	// Checking conditions
	if (!numberOneInput.value || !numberTwoInput.value) {
		msg = 'Please enter numbers.';
	} else if (numOne > numTwo) {
		msg = 'First number has to be smaller than second.';
	} else if (numOne < numTwo) {
		msg = generateRange(numOne, numTwo);
	} else if (!Number(numOne) || !Number(numTwo)) {
		msg = 'Please enter two numbers.';
	}
	output.textContent = msg;
};

// Helper function for range of numbers
const generateRange = (numOne, numTwo) => {
	const numbersRange = [];
	let i = numOne;

	while (i < numTwo) {
		numbersRange.push(i);
		i++;
	}

	return numbersRange;
};

form.addEventListener('submit', displayRange);
