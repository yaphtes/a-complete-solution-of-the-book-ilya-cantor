// task 1 (Модальное диалоговое окно)
// let form = document.getElementById('prompt-form');
// let message = document.getElementById('prompt-message');
// let show = document.getElementById('show');
// let container = document.getElementById('prompt-form-container');
// let counter = 0;
//
// show.onclick = function() {
// 	if (form.hidden) {
// 		form.hidden = false;
// 		container.hidden = false;
// 		form.style.top = `calc(50% - ${form.offsetHeight / 2}px)`;
// 		form.elements.text.focus();
// 	} else {
// 		form.hidden = true;
// 		container.hidden = true;
// 		form.style.top = '';
// 	}
// };
//
// form.elements.cancel.onclick = function() {
// 	if (!form.hidden) {
// 		form.hidden = true;
// 		container.hidden = true;
// 		form.style.top = '';
// 		form.elements.text.value = '';
// 	}
// }
//
// function showPrompt(text, callback) {
// 	message.innerHTML = text;
// 	form.onsubmit = function(event) {
// 		let value = form.elements.text.value;
// 		callback(value);
// 	};
// }
//
// showPrompt("Введите что-нибудь<br>... умное :)", function(value) {
// 	alert( value );
// });



// task 2 (Валидация формы)
function showError(container, errorMessage) {
	container.className = 'error';
	let msgElem = document.createElement('span');
	msgElem.className = 'error-message';
	msgElem.innerHTML = errorMessage;
	container.appendChild(msgElem);
}

function resetError(container) {
	container.className = '';
	if (container.lastChild.className == 'error-message') {
		container.removeChild(container.lastChild);
	}
}

function validate(form) {
	let elems = form.elements;

	resetError(elems.from.parentNode);
	if (!elems.from.value) {
		showError(elems.from.parentNode, ' Укажите от кого.');
	}

	resetError(elems.password.parentNode);
	if (!elems.password.value) {
		showError(elems.password.parentNode, ' Укажите пароль.');
	} else if (elems.password.value != elems.password2.value) {
		showError(elems.password.parentNode, ' Пароли не совпадают.');
	}

	resetError(elems.message.parentNode);
	if (!elems.message.value) {
		showError(elems.message.parentNode, ' Отсутствует текст.');
	}
}
