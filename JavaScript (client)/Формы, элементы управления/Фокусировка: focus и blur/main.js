// task 1 (Улучшенный плейсхолдер)
// let input = document.querySelector('[data-placeholder]');
//
// showPlaceholder(input);
//
// // Показать placeholder внутри input
// // Также можно сделать это при помощи вёрстки, отдельным элементом
// function showPlaceholder(input) {
// 	input.classList.add('placeholder');
// 	input.value = input.dataset.placeholder;
// }
//
// // Показать подсказку над элементом (будет вместо placeholder)
// function showTooltip(input) {
// 	let tooltip = document.createElement('span');
// 	tooltip.innerHTML = input.dataset.placeholder;
// 	tooltip.className = 'placeholder-tooltip';
// 	tooltip.style.fontSize = getComputedStyle(input).fontSize;
// 	tooltip.style.left = input.getBoundingClientRect().left + 'px';
// 	document.body.appendChild(tooltip);
// 	tooltip.style.top = input.getBoundingClientRect().top - tooltip.offsetHeight - 4 + 'px';
// 	input.tooltip = tooltip;
// }
//
// input.onfocus = function() {
// 	if (input.classList.contains('placeholder')) {
// 		input.classList.remove('placeholder');
// 		input.value = '';
// 	}
//
// 	showTooltip(input);
// };
//
// input.onblur = function() {
// 	document.body.removeChild(input.tooltip);
// 	delete input.tooltip;
//
// 	// показываем placeholder обратно, если input пуст
// 	if (input.value == '') {
// 		showPlaceholder(input);
// 	}
// };



// task 2 (Мышонок на "клавиатурном приводе")
// let mouse = document.getElementById('mouse');
//
// mouse.onkeydown = function(event) {
// 	let key = event.key;
// 	let mouse = {
// 		left: this.getBoundingClientRect().left,
// 		top: this.getBoundingClientRect().top,
// 		right: this.getBoundingClientRect().right,
// 		bottom: this.getBoundingClientRect().bottom,
// 		width: this.offsetWidth,
// 		height: this.offsetHeight
// 	};
//
// 	switch (key) {
// 		case 'ArrowUp':
// 			this.style.top = mouse.top - mouse.height + 'px';
// 			break;
// 		case 'ArrowDown':
// 			this.style.top = mouse.top + mouse.height + 'px';
// 			break;
// 		case 'ArrowLeft':
// 			this.style.left = mouse.left - mouse.width + 'px';
// 			break;
// 		case 'ArrowRight':
// 			this.style.left = mouse.left + mouse.width + 'px';
// 			break;
// 		default:
// 			alert('Нажмите клавиши-стрелки');
// 			break;
// 	}
// };



// taks 3 (Горячие клавиши)
// let view = document.getElementById('view');
// let edit = document.getElementById('edit');
//
// document.onkeydown = function(event) {
// 	if (event.keyCode == 27) { // escape
// 		cancel();
// 		event.preventDefault();
// 	}
//
// 	if (event.ctrlKey && event.keyCode == 'E'.charCodeAt(0)) {
// 		edit();
// 		event.preventDefault();
// 	}
//
// 	if (event.ctrlKey && event.keyCode == 'S'.charCodeAt(0)) {
// 		save();
// 		event.preventDefault();
// 	}
//
// 	function edit() {
// 		view.style.display = 'none';
// 		area.value = view.innerHTML;
// 		area.style.display = 'block';
// 		area.focus();
// 	}
//
// 	function cancel() {
// 		area.style.display = 'none';
// 		view.style.display = 'block';
// 	}
//
// 	function save() {
// 		area.style.display = 'none';
// 		view.innerHTML = area.value;
// 		view.style.display = 'block';
// 	}
// };



// task 4 (Редактировать TD по клику)
// var table = document.getElementById('bagua-table');
// let editingTd;
//
// table.onclick = function(event) {
// 	let target = event.target;
//
// 	while (target != table) {
// 		if (target.className == 'edit-cancel') {
// 			finishTdEdit(editingTd.elem, false);
// 			return;
// 		}
//
// 		if (target.className == 'edit-ok') {
// 			finishTdEdit(editingTd.elem, true);
// 			return;
// 		}
//
// 		if (target.nodeName == 'TD') {
// 			if (editingTd) return;
//
// 			makeTdEditable(target);
// 			return;
// 		}
//
// 		target = target.parentNode;
// 	}
// }
//
// function makeTdEditable(td) {
// 	editingTd = {
// 		elem: td,
// 		data: td.innerHTML
// 	};
//
// 	td.classList.add('edit-td');
//
// 	let textarea = document.createElement('textarea');
// 	textarea.style.cssText = `\
// 		width: ${td.clientWidth}px;\
// 		height: ${td.clientHeight}px;\
// 	`;
// 	textarea.className = 'edit-area';
//
// 	textarea.value = td.innerHTML;
// 	td.innerHTML = '';
// 	td.appendChild(textarea);
// 	textarea.focus();
//
// 	td.insertAdjacentHTML('beforeEnd',
// 		'<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
// 	);
// }
//
// function finishTdEdit(td, isOk) {
// 	if (isOk) {
// 		td.innerHTML = td.firstChild.value;
// 	} else {
// 		td.innerHTML = editingTd.data;
// 	}
// 	td.classList.remove('edit-td');
// 	editingTd = null;
// }



// task 5 (Красивый плейсхолдер для INPUT)
// let input = document.getElementById('input');
// let placeholder = document.getElementById('placeholder');
//
// input.onfocus = function() {
// 	placeholder.remove();
// }



// task 6 (Поле, предупреждающее о включенном CapsLock)
let input = document.getElementById('input');
let capsIndicator = document.getElementById('capsIndicator');

input.onkeypress = function(event) {
	let key = event.key;
	let shift = event.shiftKey;

	if (key != key.toLowerCase() && !shift) {
		capsIndicator.hidden = false;
	} else {
		capsIndicator.hidden = true;
	}
};
