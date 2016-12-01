// // example
// function Menu(options) {
// 	var elem;
//
// 	function getElem() {
// 		if (!elem) render();
// 		return elem;
// 	}
//
// 	function render() {
// 		elem = document.createElement('div');
// 		elem.className = "menu";
//
// 		var titleElem = document.createElement('span');
// 		elem.appendChild(titleElem);
// 		titleElem.className = "title";
// 		titleElem.textContent = options.title;
//
// 		elem.onmousedown = function() {
// 			return false;
// 		};
//
// 		elem.onclick = function(event) {
// 			if (event.target.closest('.title')) {
// 				toggle();
// 			}
// 		}
//
// 	}
//
// 	function renderItems() {
// 		var items = options.items || [];
// 		var list = document.createElement('ul');
// 		items.forEach(function(item) {
// 			var li = document.createElement('li');
// 			li.textContent = item;
// 			list.appendChild(li);
// 		});
// 		elem.appendChild(list);
// 	}
//
// 	function open() {
// 		if (!elem.querySelector('ul')) {
// 			renderItems();
// 		}
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
//
//
// // создать объект меню с данным заголовком и опциями
// var menu = new Menu({
// 	title: "Сладости",
// 	items: [
// 		"Торт",
// 		"Пончик",
// 		"Пирожное",
// 		"Шоколадка",
// 		"Мороженое"
// 	]
// });
//
// // получить сгенерированный DOM-элемент меню
// var elem = menu.getElem();
//
// // вставить меню в нужное место страницы
// document.body.appendChild(elem);



// task 1 (Часики)
// function Clock(options) {
// 	let elem = options.elem;
// 	let timer;
//
//
// 	this.start = function() {
// 		render();
// 		timer = setInterval(function() {
// 			render();
// 		}, 1000);
// 	};
//
//
// 	this.stop = function() {
// 		clearInterval(timer);
// 	};
//
//
// 	function render() {
// 		let date = new Date;
// 		let hour = elem.querySelector('.hour');
// 		let min = elem.querySelector('.min');
// 		let sec = elem.querySelector('.sec');
//
//
// 		if (date.getHours() < 10) {
// 			hour.innerHTML = '0' + date.getHours();
// 		} else {
// 			hour.innerHTML = date.getHours();
// 		}
//
// 		if (date.getMinutes() < 10) {
// 			min.innerHTML = '0' + date.getMinutes();
// 		} else {
// 			min.innerHTML = date.getMinutes();
// 		}
//
// 		if (date.getSeconds() < 10) {
// 			sec.innerHTML = '0' + date.getSeconds();
// 		} else {
// 			sec.innerHTML = date.getSeconds();
// 		}
// 	}
// }
//
// var pageClock = new Clock({elem: document.getElementById('clock')});



// task 2 (Слайдер-компонент)
// var sliderElem = document.getElementById('slider');
// var thumbElem = sliderElem.children[0];
//
// thumbElem.onmousedown = function(e) {
// 	var thumbCoords = getCoords(thumbElem);
// 	var shiftX = e.pageX - thumbCoords.left;
// 	// shiftY здесь не нужен, слайдер двигается только по горизонтали
//
// 	var sliderCoords = getCoords(sliderElem);
//
// 	document.onmousemove = function(e) {
// 		//  вычесть координату родителя, т.к. position: relative
// 		var newLeft = e.pageX - shiftX - sliderCoords.left;
//
// 		// курсор ушёл вне слайдера
// 		if (newLeft < 0) {
// 			newLeft = 0;
// 		}
// 		var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
// 		if (newLeft > rightEdge) {
// 			newLeft = rightEdge;
// 		}
//
// 		thumbElem.style.left = newLeft + 'px';
// 	}
//
// 	document.onmouseup = function() {
// 		document.onmousemove = document.onmouseup = null;
// 	};
//
// 	return false; // disable selection start (cursor change)
// };
//
// thumbElem.ondragstart = function() {
// 	return false;
// };
//
// function getCoords(elem) { // кроме IE8-
// 	var box = elem.getBoundingClientRect();
//
// 	return {
// 		top: box.top + pageYOffset,
// 		left: box.left + pageXOffset
// 	};
//
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//
// function Slider(options) {
// 	var elem = options.elem;
// 	var thumbElem = elem.querySelector('.thumb');
//
// 	var sliderCoords, thumbCoords, shiftX, shiftY;
//
// 	elem.ondragstart = function() {
// 		return false;
// 	};
//
// 	elem.onmousedown = function(event) {
// 		if (event.target.closest('.thumb')) {
// 			startDrag(event.clientX, event.clientY);
// 			return false; // disable selection start (cursor change)
// 		}
// 	}
//
// 	function startDrag(startClientX, startClientY) {
// 		thumbCoords = thumbElem.getBoundingClientRect();
// 		shiftX = startClientX - thumbCoords.left;
// 		shiftY = startClientY - thumbCoords.top;
//
// 		sliderCoords = elem.getBoundingClientRect();
//
// 		document.addEventListener('mousemove', onDocumentMouseMove);
// 		document.addEventListener('mouseup', onDocumentMouseUp);
// 	}
//
//
//
// 	function moveTo(clientX) {
// 		// вычесть координату родителя, т.к. position: relative
// 		var newLeft = clientX - shiftX - sliderCoords.left;
//
// 		// курсор ушёл вне слайдера
// 		if (newLeft < 0) {
// 			newLeft = 0;
// 		}
// 		var rightEdge = elem.offsetWidth - thumbElem.offsetWidth;
// 		if (newLeft > rightEdge) {
// 			newLeft = rightEdge;
// 		}
//
// 		thumbElem.style.left = newLeft + 'px';
// 	}
//
//
// 	function onDocumentMouseMove(e) {
// 		moveTo(e.clientX);
// 	}
//
// 	function onDocumentMouseUp() {
// 		endDrag();
// 	}
//
//
// 	function endDrag() {
// 		document.removeEventListener('mousemove', onDocumentMouseMove);
// 		document.removeEventListener('mouseup', onDocumentMouseUp);
// 	}
//
// }
//
// var slider = new Slider({
// 	sliderElem: document.getElementById('slider'),
// 	thumbElem: document.getElementById('slider').children[0]
// });



// task 3 (Компонент: список с выделением)
// var ul = document.querySelector('ul');
//
// var lastClickedLi = null;
//
// // --- обработчики ---
//
// ul.onclick = function(event) {
// 	var target = event.target;
//
// 	// возможно, клик был внутри списка UL, но вне элементов LI
// 	if (target.tagName != "LI")
// 		return;
//
// 	// для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
// 	if (event.metaKey || event.ctrlKey) {
// 		toggleSelect(target);
// 	} else if (event.shiftKey) {
// 		selectFromLast(target);
// 	} else {
// 		selectSingle(target);
// 	}
//
// 	lastClickedLi = target;
// }
//
// ul.onmousedown = function() {
// 	return false;
// };
//
// // --- функции для выделения ---
//
// function toggleSelect(li) {
// 	li.classList.toggle('selected');
// }
//
// function selectFromLast(target) {
// 	var startElem = lastClickedLi || ul.children[0];
//
// 	var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
//
// 	if (isLastClickedBefore) {
// 		for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
// 			elem.classList.add('selected');
// 		}
// 	} else {
// 		for (var elem = startElem; elem != target; elem = elem.previousElementSibling) {
// 			elem.classList.add('selected');
// 		}
// 	}
// 	elem.classList.add('selected');
// }
//
// function deselectAll() {
// 	for (var i = 0; i < ul.children.length; i++) {
// 		ul.children[i].classList.remove('selected');
// 	}
// }
//
// function selectSingle(li) {
// 	deselectAll();
// 	li.classList.add('selected');
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function ListSelect(options) {
// 	var ul = options.ul;
// 	var lastClickedLi = null;
//
//
// 	this.getSelected = function() {
// 		let getSelectedElem = document.getElementById('get-selected');
// 		let messageForAlert = [];
// 		let selectedItems = ul.querySelectorAll('.selected');
//
// 		for (let i = 0; i < selectedItems.length; i++) {
// 			let text = selectedItems[i].textContent;
// 			messageForAlert.push(text);
// 		}
// 		alert(messageForAlert.toString());
// 	};
//
//
//
// 	ul.onclick = function(event) {
// 		var target = event.target;
//
// 		// возможно, клик был внутри списка UL, но вне элементов LI
// 		if (target.tagName != "LI")
// 			return;
//
// 		// для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
// 		if (event.metaKey || event.ctrlKey) {
// 			toggleSelect(target);
// 		} else if (event.shiftKey) {
// 			selectFromLast(target);
// 		} else {
// 			selectSingle(target);
// 		}
//
// 		lastClickedLi = target;
// 	}
//
//
// 	ul.onmousedown = function() {
// 		return false;
// 	};
//
//
//
// 	function toggleSelect(li) {
// 		li.classList.toggle('selected');
// 	}
//
//
// 	function selectFromLast(target) {
// 		var startElem = lastClickedLi || ul.children[0];
//
// 		var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
//
// 		if (isLastClickedBefore) {
// 			for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
// 				elem.classList.add('selected');
// 			}
// 		} else {
// 			for (var elem = startElem; elem != target; elem = elem.previousElementSibling) {
// 				elem.classList.add('selected');
// 			}
// 		}
// 		elem.classList.add('selected');
// 	}
//
//
// 	function deselectAll() {
// 		for (var i = 0; i < ul.children.length; i++) {
// 			ul.children[i].classList.remove('selected');
// 		}
// 	}
//
//
// 	function selectSingle(li) {
// 		deselectAll();
// 		li.classList.add('selected');
// 	}
// }
//
// var listSelect = new ListSelect({
// 	ul: document.querySelector('ul')
// });
// // listSelect.getSelected()



// task 4 (Голосовалка)
// function Voter(options) {
// 	let elem = options.elem;
//
// 	this.setVote = function(value) {
// 		let voteElem = elem.querySelector('.vote');
//
// 		voteElem.textContent = value;
// 	};
//
//
//
// 	elem.onmousedown = function(event) {
// 		let target = event.target;
//
// 		if (target.classList.contains('down') || target.classList.contains('up')) {
// 			return false;
// 		}
// 	}
//
//
// 	elem.onclick = function(event) {
// 		let target = event.target;
//
// 		if (target.classList.contains('down')) {
// 			down();
// 		} else if (target.classList.contains('up')) {
// 			up();
// 		} else return;
// 	}
//
//
//
// 	function down() {
// 		let voteElem = elem.querySelector('.vote');
// 		let previousValue = Number( voteElem.textContent );
//
// 		voteElem.textContent = previousValue - 1;
// 	}
//
//
// 	function up() {
// 		let voteElem = elem.querySelector('.vote');
// 		let previousValue = Number( voteElem.textContent );
//
// 		voteElem.textContent = previousValue + 1;
// 	}
// }
//
//
// var voter = new Voter({elem: document.getElementById('voter')});
//
// voter.setVote(1);



// task 5 (Голосовалка в прототипном стиле ООП)
// function Voter(options) {
// 	var elem = this._elem = options.elem;
// 	this._voteElem = elem.querySelector('.vote');
//
// 	elem.onmousedown = function() {
// 		return false;
// 	};
//
// 	elem.onclick = this._onClick.bind(this);
// }
//
// Voter.prototype._onClick = function(event) {
// 	if (event.target.closest('.down')) {
// 		this._voteDecrease();
// 	} else if (event.target.closest('.up')) {
// 		this._voteIncrease();
// 	}
// };
//
//
// Voter.prototype._voteIncrease = function() {
// 	this._voteElem.innerHTML = +this._voteElem.innerHTML + 1;
// };
//
// Voter.prototype._voteDecrease = function() {
// 	this._voteElem.innerHTML = +this._voteElem.innerHTML - 1;
// };
//
// Voter.prototype.setVote = function(vote) {
// 	this._voteElem.innerHTML = +vote;
// };
//
// var voter = new Voter({
// 	elem: document.getElementById('voter')
// });
//
// console.log(voter._elem);



// task 6 (Добавить двойной голос в копилку)
function Voter(options) {
	var elem = this._elem = options.elem;
	this._voteElem = elem.querySelector('.vote');

	elem.onmousedown = function() {
		return false;
	};

	elem.onclick = this._onClick.bind(this);
}

Voter.prototype._onClick = function(event) {
	if (event.target.closest('.down')) {
		this._voteDecrease();
	} else if (event.target.closest('.up')) {
		this._voteIncrease();
	}
};


Voter.prototype._voteIncrease = function() {
	this._voteElem.innerHTML = +this._voteElem.innerHTML + 1;
};

Voter.prototype._voteDecrease = function() {
	this._voteElem.innerHTML = +this._voteElem.innerHTML - 1;
};

Voter.prototype.setVote = function(vote) {
	this._voteElem.innerHTML = +vote;
};


function StepVoter(options) {
	Voter.apply(this, arguments);
	this._step = options.step || 1;
}
StepVoter.prototype = Object.create(Voter.prototype);

StepVoter.prototype._voteIncrease = function() {
	this._voteElem.innerHTML = +this._voteElem.innerHTML + this._step;
};

StepVoter.prototype._voteDecrease = function() {
	this._voteElem.innerHTML = +this._voteElem.innerHTML - this._step;
};


var voter = new StepVoter({
	elem: document.getElementById('voter'),
	step: 2 // увеличивать/уменьшать сразу на 2 пункта
});
