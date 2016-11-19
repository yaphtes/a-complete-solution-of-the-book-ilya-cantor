// // task 2 (Удаление элементов)
// if (Element.prototype.remove === undefined) {
// 	Element.prototype.remove = function() {
// 		if (this.parentElement) {
// 			this.parentElement.removeChild(this);
// 		} else {
// 			return null;
// 		}
// 	};
// }
//
//
//
// // task 3 (insertAfter)
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
//
//
//
// // task 4 (removeChildren)
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
//
//
//
// // task 6 (Создать список)
// function makeUl() {
// 	let ul = document.createElement('ul'),
// 		text;
//
//
// 	document.body.appendChild(ul);
//
// 	do {
// 		text = prompt('Введите текст для очередного пункта или нажмите ESC');
// 		if (text == null) break;
//
// 		let li = document.createElement('li');
// 		// li.appendChild(document.createTextNode(text));
// 		li.textContent = text;
//
// 		ul.appendChild(li);
//
// 	} while (text != null);
// }
//
// makeUl();
//
//
//
// // task 7 (Создайте дерево из объекта)
// var container = document.getElementById('container');
//
// var data = {
// 	"Рыбы": {
// 		"Форель": {},
// 		"Щука": {}
// 	},
//
// 	"Деревья": {
// 		"Хвойные": {
// 			"Лиственница": {},
// 			"Ель": {}
// 		},
// 		"Цветковые": {
// 			"Берёза": {},
// 			"Тополь": {}
// 		}
// 	}
// };
//
// createTree(container, data); // создаёт
//
// option 1
// function createTree(container, data) {
// 	container.innerHTML = createTreeText(data);
// }
//
// function createTreeText(obj) {
// 	var li = '';
// 	for (let key in obj) {
// 		li += `<li> ${key + createTreeText(obj[key])} </li>`;
// 	}
// 	if (li) {
// 		var ul = `<ul> ${li} </ul>`;
// 	}
// 	return ul || '';
// }
//
// // option 2
// function createTree(container, obj) {
// 	container.appendChild(createTreeDom(obj));
// }
//
// function createTreeDom(obj) {
// 	if (isEmptyObject(obj)) {
// 		return;
// 	}
//
// 	let ul = document.createElement('ul');
//
// 	for (let key in obj) {
// 		let li = document.createElement('li');
// 		li.innerHTML = key;
//
// 		let childrenUl = createTreeDom(obj[key]);
// 		if (childrenUl) {
// 			li.appendChild(childrenUl);
// 		}
//
// 		ul.appendChild(li);
// 	}
// 	return ul;
// }
//
// function isEmptyObject(obj) {
// 	for (let key in obj) {
// 		return false;
// 	}
// 	return true;
// }
//
//
//
//
// // task 8 (Дерево)
// let lis = document.getElementsByTagName('li');
//
// for (let i = 0; i < lis.length; i++) {
// 	// получить количетство детей
// 	let childCount = lis[i].getElementsByTagName('li').length;
// 	if (childCount == 0) continue;
//
// 	// добавить количество детей к текущему узлу
// 	lis[i].firstChild.data += ` [${childCount}]`;
// }
//
//
//
// // task 9 (Создать календарь в виде таблицы)
// function createCalendar(id, year, month) {
// 	function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
// 		var day = date.getDay();
// 		if (day == 0) day = 7;
// 		return day - 1;
// 	}
//
// 	var elem = document.getElementById(id);
//
// 	var mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
// 	var d = new Date(year, mon);
//
// 	var table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
//
// 	// заполнить первый ряд от понедельника
// 	// и до дня, с которого начинается месяц
// 	for (var i = 0; i < getDay(d); i++) {
// 		table += '<td></td>';
// 	}
//
// 	// ячейки календаря с датами
// 	while (d.getMonth() == mon) {
// 		table += '<td>' + d.getDate() + '</td>';
//
// 		if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
// 			table += '</tr><tr>';
// 		}
//
// 		d.setDate(d.getDate() + 1);
// 	}
//
// 	// добить таблицу пустыми ячейками, если нужно
// 	if (getDay(d) != 0) {
// 		for (var i = getDay(d); i < 7; i++) {
// 			table += '<td></td>';
// 		}
// 	}
//
// 	// закрыть таблицу
// 	table += '</tr></table>';
//
// 	// только одно присваивание innerHTML
// 	elem.innerHTML = table;
// }
//
// createCalendar("calendar", 2012, 9);
//
//
//
// // task 10 (Часики с использованием 'setInterval')
let hoursDom = document.querySelector('.hours'),
	minutesDom = document.querySelector('.minutes'),
	secondsDom = document.querySelector('.seconds');

setInterval(function() {
	let date = new Date();

	let hours = String(date.getHours());
	if (hours.length < 2) {
		hours = `${0 + hours}`;
	}

	let minutes = String(date.getMinutes());
	if (minutes.length < 2) {
		minutes = `${0 + minutes}`;
	}

	let seconds = String(date.getSeconds());
	if (seconds.length < 2) {
		seconds = `${0 + seconds}`;
	}

	// обновление
	hoursDom.textContent = hours;
	minutesDom.textContent = minutes;
	secondsDom.textContent = seconds;
}, 1000);

hoursDom.style.color = 'red';
minutesDom.style.color = 'green';
secondsDom.style.color = 'blue';
