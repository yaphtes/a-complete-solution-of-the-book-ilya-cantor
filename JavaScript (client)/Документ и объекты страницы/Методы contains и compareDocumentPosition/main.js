// task 2
// if (Element.prototype.remove === undefined) {
// 	Element.prototype.remove = function() {
// 		if (this.parentElement) {
// 			this.parentElement.removeChild(this);
// 		} else {
// 			return null;
// 		}
// 	};
// }



// task 3
// let container = document.getElementById('container'),
// 	elem = document.createElement('div');
//
// elem.innerHTML = '<b>Новый элемент</b>';
//
// function insertAfter(elem, after) {
// 	after.parentNode.insertBefore(elem, after.nextSibling);
// }
//
// var body = document.body;
//
// // вставить elem после первого элемента
// insertAfter(elem, container.firstChild); // <--- должно работать
//
// // вставить elem за последним элементом
// // insertAfter(elem, container.lastChild); // <--- должно работать



// task 4
// let table = document.getElementById('table'),
// 	ol = document.getElementById('ol');
// console.dir(ol.children);
// function removeChildren(elem) {
// 	while (elem.lastChild) {
// 		elem.removeChild(elem.lastChild);
// 	}
// }
//
// removeChildren(table); // очищает таблицу
// removeChildren(ol); // очищает список


// task 6 (Создать список)
function makeUl() {
	let ul = document.createElement('ul'),
		text;


	document.body.appendChild(ul);

	do {
		text = prompt('Введите текст для очередного пункта или нажмите ESC');
		if (text == null) break;

		let li = document.createElement('li');
		// li.appendChild(document.createTextNode(text));
		li.textContent = text;

		ul.appendChild(li);

	} while (text != null);
}

makeUl();
