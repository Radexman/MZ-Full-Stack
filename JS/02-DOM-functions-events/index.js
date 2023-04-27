const form = document.getElementById('form');

const checkValue = (e) => {
	e.preventDefault();
	console.log('Form works');
};

form.addEventListener('click', checkValue);
