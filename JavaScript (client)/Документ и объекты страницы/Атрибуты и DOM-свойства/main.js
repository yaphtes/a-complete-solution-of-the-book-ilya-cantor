// task 1
// let widget = document.getElementById('widget');
// let widgetName = widget.dataset.widgetName;
// console.log(widgetName);



// task 2
let css = 'a[href*="://"]:not([href^="http://internal.com"])',
	links = document.querySelectorAll(css);

for (let i = 0; i < links.length; i++) {
	links[i].classList.add('external');
}
