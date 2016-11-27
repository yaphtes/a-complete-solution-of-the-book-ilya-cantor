// task 1 (Поле только для цифр)
// let input = document.querySelector('input');
//
// input.onkeypress = function(event) {
// 	let key = event.key;
//
// 	if (key < '0' || key > '9') event.preventDefault();
// }



// task 2 (Отследить одновременное нажатие)
function runOnKeys(func, ...args) {
	let pressed = {};

	document.onkeydown = function(event) {
		let key = event.key;
		pressed[key] = true;

		for (let i = 0; i < args.length; i++) {
			let arg = args[i];
			if (!pressed[arg]) return;
		}

		pressed = {};

		func();
	};

	document.onkeyup = function(event) {
		let key = event.key;
		pressed[key] = false;
	};
}

runOnKeys(function() {
	alert ('Привет!');
}, 'q', 'w');
