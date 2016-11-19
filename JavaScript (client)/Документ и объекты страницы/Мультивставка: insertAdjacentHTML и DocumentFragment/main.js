// task 1 (Вставьте элементы в конец списка)
// let ul = document.body.children[0];
// ul.insertAdjacentHTML('beforeEnd', '<li>3</li><li>4</li><li>5</li>');



// task 2 (Отсортировать таблицу)
let maxAge = 0,
	currentAge = 0;
for (let i = 0; i < table.rows.length; i++) {
	currentAge = Number(table.rows[i].lastElementChild.textContent);

	if (currentAge > maxAge) {
		maxAge = currentAge;
		table.tBodies[0].insertAdjacentHTML('afterBegin', rows[0]);
	}
}
