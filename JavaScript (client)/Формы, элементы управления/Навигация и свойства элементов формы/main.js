// task 1 (Добавьте опцию к селекту)

let select = document.querySelector('select');

for (let i = 0; i < select.options.length; i++) {
	let option = select.options[i];

	if (option.selected) {
		console.log(option.value);
		console.log(option.text + '\n');
	}
}

let option = document.createElement('option');
option.value = 'Classic';
option.text = 'Классика';
select.append(option);
option.selected = true;
console.log(option.selected);
