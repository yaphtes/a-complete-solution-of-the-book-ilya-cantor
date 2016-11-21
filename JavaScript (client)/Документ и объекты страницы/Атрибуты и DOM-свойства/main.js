// task 1 (Получите пользовательский атрибут)
// let widget = document.getElementById('widget');
// let widgetName = widget.dataset.widgetName;
// console.log(widgetName);



// task 2 (Поставьте класс ссылкам)
let css = 'a[href*="://"]:not([href^="http://internal.com"])',
	links = document.querySelectorAll(css);

for (let i = 0; i < links.length; i++) {
	links[i].classList.add('external');
}
