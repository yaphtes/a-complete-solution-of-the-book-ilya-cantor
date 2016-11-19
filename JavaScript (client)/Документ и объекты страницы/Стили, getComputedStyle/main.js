// task 1 (Скругленная кнопка со стилями из JavaScript)
let a = document.createElement('a');

a.textContent = 'Нажми на меня';
a.setAttribute('href', '/');
a.style.cssText = "\
	border-radius: 8px; \
	border: 2px groove green; \
	display: block; \
	height: 30px; \
	line-height: 30px; \
	width: 120px; \
	text-decoration: none; \
	text-align: center; \
	color: red; \
	font-weight: bold; \
";

document.body.appendChild(a);



// task 2 (Создать уведомление)
/**
 * Показывает уведомление, пропадающее через 1.5 сек
 *
 * @param options.top {number} вертикальный отступ, в px
 * @param options.right {number} правый отступ, в px
 * @param options.cssText {string} строка стиля
 * @param options.className {string} CSS-класс
 * @param options.html {string} HTML-текст для показа
 */
function showNotification(options) {
	let container = document.createElement('div');

	container.className = 'notification';
	container.style.cssText = options.cssText;
	container.innerHTML = options.html;
	container.style.marginTop = `${options.top}px`;
	container.style.marginRight = `${options.right}px`;
	container.className += ` ${options.className}`;

	document.body.append(container);

	setTimeout(function() {
		document.body.removeChild(container);
	}, 1500);
}

// покажет элемент с текстом "Привет" и классом welcome справа-сверху окна
showNotification({
	top: 10,
	right: 10,
	html: "Привет",
	className: "welcome",
	cssText: 'color: green'
});
