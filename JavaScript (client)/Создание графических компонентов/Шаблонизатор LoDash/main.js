// example
// let menu = new Menu({
// 	title: 'Сладости',
// 	template: _.template(document.getElementById('menu-template').innerHTML),
// 	listTemplate: _.template(document.getElementById('menu-list-template').innerHTML),
// 	items: [
// 		'Торт',
// 		'Пончик',
// 		'Пирожное',
// 		'Шоколадка',
// 		'Мороженое'
// 	]
// });
//
// document.body.append(menu.getElem());
//
//
// function Menu(options) {
// 	var elem;
//
// 	function getElem() {
// 		if (!elem) render();
// 		return elem;
// 	}
//
// 	function render() {
// 		var html = options.template({
// 			title: options.title
// 		});
//
// 		elem = document.createElement('div');
// 		elem.innerHTML = html;
// 		elem = elem.firstElementChild;
//
// 		elem.onmousedown = function() {
// 			return false;
// 		}
//
// 		elem.onclick = function(event) {
// 			if (event.target.closest('.title')) {
// 				toggle();
// 			}
// 		}
// 	}
//
// 	function renderItems() {
// 		if (elem.querySelector('ul')) return;
//
// 		var listHtml = options.listTemplate({
// 			items: options.items
// 		});
// 		elem.insertAdjacentHTML("beforeEnd", listHtml);
// 	}
//
// 	function open() {
// 		renderItems();
// 		elem.classList.add('open');
// 	};
//
// 	function close() {
// 		elem.classList.remove('open');
// 	};
//
// 	function toggle() {
// 		if (elem.classList.contains('open')) close();
// 		else open();
// 	};
//
// 	this.getElem = getElem;
// 	this.toggle = toggle;
// 	this.close = close;
// 	this.open = open;
// }



// task 1 (Шаблон для таблицы с пользователями)
// var users = [
// 	{name: "Вася", age: 10},
// 	{name: "Петя", age: 15},
// 	{name: "Женя", age: 20},
// 	{name: "Маша", age: 25},
// 	{name: "Даша", age: 30},
// ];
//
// let tmpl = document.getElementById('grid-template').innerHTML.trim();
// tmpl = _.template(tmpl);
//
// document.getElementById('grid-holder').innerHTML = tmpl({ list: users });



// task 3 (Сделайте меню ссылками)
function Menu(options) {
	var elem;

	function getElem() {
		if (!elem) render();
		return elem;
	}

	function render() {
		var html = options.template({
			title: options.title
		});

		elem = document.createElement('div');
		elem.innerHTML = html;
		elem = elem.firstElementChild;

		elem.onmousedown = function() {
			return false;
		}

		elem.onclick = function(event) {
			let target = event.target;

			if (target.closest('.title')) {
				toggle();
			}

			if (target.closest('a')) {
				event.preventDefault();
				select(target.closest('a'));
			}
		}
	}

	function renderItems() {
		if (elem.querySelector('ul')) return;

		var listHtml = options.listTemplate({
			items: options.items
		});
		elem.insertAdjacentHTML("beforeEnd", listHtml);
	}

	function open() {
		renderItems();
		elem.classList.add('open');
	};

	function close() {
		elem.classList.remove('open');
	};

	function toggle() {
		if (elem.classList.contains('open')) close();
		else open();
	};

	function select(link) {
		alert(link.getAttribute('href').slice(1));
	}

	this.getElem = getElem;
	this.toggle = toggle;
	this.close = close;
	this.open = open;
}
