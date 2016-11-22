// task 1 (Скрытие сообщения с помощью делегирования)
// let container = document.getElementById('container');
//
// container.onclick = function(event) {
// 	let target = event.target;
//
//
// 	if (target.getAttribute('data-action') == 'remove') {
// 		target.parentElement.remove();
// 		return;
// 	}
// };



// task 2 (Раскрывающееся дерево)
// let treeUl = document.querySelector('ul');
// let treeLis = treeUl.getElementsByTagName('li');
//
// for (let i = 0; i < treeLis.length; i++) {
// 	let li = treeLis[i];
// 	let span = document.createElement('span');
//
// 	li.insertBefore(span, li.firstChild);
// 	span.appendChild(span.nextSibling);
// }
//
// treeUl.onclick = function(event) {
// 	let target = event.target;
//
// 	if (target.tagName != 'SPAN') return;
//
// 	let li = target.parentNode;
// 	let childrenContainer = li.getElementsByTagName('ul')[0];
//
// 	if (!childrenContainer) return;
//
// 	childrenContainer.hidden = !childrenContainer.hidden;
// }



// task 3 (Сортировка таблицы)
let grid = document.getElementById('grid');

grid.onclick = function(e) {
	if (e.target.tagName != 'TH') return;

	// Если TH -- сортируем
	sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
};

function sortGrid(colNum, type) {
	let tbody = grid.tBodies[0];

	// Составить массив из TR
	let rowsArray = [].slice.call(tbody.rows);

	// определить функцию сравнения, в зависимости от типа
	let compare;

	switch (type) {
		case 'number':
			compare = function(rowA, rowB) {
				return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
			};
			break;
		case 'string':
			compare = function(rowA, rowB) {
				return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
			};
			break;
	}

	// сортировать
	rowsArray.sort(compare);

	// Убрать tbody из большого DOM документа для лучшей производительности
	grid.removeChild(tbody);

	// добавить результат в нужном порядке в TBODY
	// они автоматически будут убраны со старых мест и вставлены в правильном порядке
	for (let i = 0; i < rowsArray.length; i++) {
		tbody.appendChild(rowsArray[i]);
	}

	grid.appendChild(tbody);
}
