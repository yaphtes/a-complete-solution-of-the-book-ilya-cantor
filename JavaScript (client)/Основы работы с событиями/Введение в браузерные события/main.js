// task 1 (Спрятать при клике)
// let hider = document.getElementById('hider');
// let text = document.getElementById('text');
//
// hider.addEventListener('click', function(e) {
// 	text.hidden = 'true';
// });



// task 2 (Спрятаться)
// let button = document.createElement('button');
//
// button.textContent = 'Нажми, чтобы спрятать меня';
// document.body.appendChild(button);
//
// button.addEventListener('click', function(e) {
// 	this.hidden = true;
// });



// task 4 (Раскрывающееся меню)
// let menuTitle = document.querySelector('.menu__title');
// let menu = document.querySelector('.menu');
// let menuItems = document.querySelector('.menu ul');
//
// menu.addEventListener('click', function(e) {
// 	this.classList.toggle('menu--closed');
// });



// task 5 (Спрятать сообщение)
// let buttons = document.querySelectorAll('.remove-button');
//
// for (let i = 0; i < buttons.length; i++) {
// 	let button = buttons[i];
//
// 	button.addEventListener('click', function(e) {
// 		this.parentNode.remove();
// 	});
// }



// task 6 (Карусель)
const AMOUNT = 3;
const WIDTH = 130;

let ul = document.querySelector('ul');
let lis = ul.getElementsByTagName('li');
let carousel = document.getElementById('carousel');

let position = 0; // текущая позиция ul


carousel.querySelector('.prev').addEventListener('click', function(e) {
	position = Math.min(position + WIDTH * AMOUNT, 0);
	ul.style.transform = `translateX( ${position}px )`;
});

carousel.querySelector('.next').addEventListener('click', function(e) {
	position = Math.max(position - WIDTH * AMOUNT , -WIDTH * (ul.children.length - AMOUNT));
	ul.style.transform = `translateX( ${position}px )`;
});
