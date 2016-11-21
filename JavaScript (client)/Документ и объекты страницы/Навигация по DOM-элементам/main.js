// task 1 (DOM children)
document.head
document.body.children[1]
document.body.children[1].children[1]



// task 2 (Проверка существования детей)
if (elem.hasChildNodes()) {
	// узел elem пуст
}



// task 4 (Выделите ячейки по диагонали)
var table = document.body.children[0];

for (var i = 0; i < table.rows.length; i++) {
	var row = table.rows[i];
	row.cells[i].style.backgroundColor = 'red';
}
