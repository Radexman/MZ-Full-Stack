# **JS Basics**

In contradiction to PHP, JavaScript is freely avialable to the user. PHP is run o server side and JS is run in the browser also known as client.

JavaScript is used to create better interactive user expieriences, animations, galleries and so on.

Variables are "containers" for storing data in RAM.

We can write our JS code directly in the HTML file in head section but it is not advised to do so and is considered bad practice. We want to separate our JS in differend files, this practice is called "separation of concerns".

## **Example JS Functions**

Writing text on the page and changing all of the page content (deprecated method).

```js
document.write('Example text');
```

ID selector for picking specific DOM elments to work on.

```js
document.getElementById('element-name');
```

Asynchronus function that executes code after specified amount of time in milliseconds.

```js
setTiemout(function, 1000);
```

## **String concatenation in JS**

To join difftend text strings in JS we can use two methods.
One is by using plus arithmetical operator.

```js
const sentence = 'I' + ' like' + ' football' + '.';
```

And second, more modern way is to use template literal.
We can insert variables and other JS expressions directly into template literal.

```js
const sport = 'football';

const sentance = `I like to play ${sport}`;
```

## **Invoking / Calling Functions**

When we declare function in JS we don't run it's code yet, we need to call it in the code when we want it by adding parentheses to the end of function name. We can run functions on specific events like clicks or form submissions to add more interactive expieriences to our web page.

Function invocation:

```js
const myFunction = () => {
	console.log('Hello World');
};

myFunction();
```

Function called on specific event:

```js
const myFunction = () => {
	console.log('Goodbye world');

	document.body.addEventListener('DOMContentLoaded', myFunction);
};
```
