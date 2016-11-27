// task 1 (Аватар наверху при прокрутке)
// let avatar = document.getElementById('avatar');
// let oldTop = avatar.getBoundingClientRect().top + window.pageYOffset;
//
// document.addEventListener('scroll', function(event) {
// 	let coords = {
// 		left: avatar.getBoundingClientRect().left,
// 		top: avatar.getBoundingClientRect().top
// 	};
//
// 	if (coords.top < 0) {
// 		avatar.style.position = 'fixed';
// 		avatar.style.left = '0px';
// 		avatar.style.top = '0px';
// 	}
//
// 	if (window.pageYOffset <= oldTop) {
// 		avatar.style.position = 'static';
// 		avatar.style.left = '';
// 		avatar.style.top = '';
// 	}
// }, false);



// task 2 (Кнопка вверх вниз)
// let matrix = document.getElementById('matrix');
// let upDownButton = matrix.querySelector('.matrix__help-button');
// let currentTop = null;
//
// document.addEventListener('scroll', function(event) {
// 	if (window.pageYOffset > document.documentElement.clientHeight) {
// 		upDownButton.hidden = false;
// 	} else {
// 		if (!currentTop) upDownButton.hidden = true;
// 	}
// }, false);
//
//
// upDownButton.addEventListener('click', function(event) {
// 	if (currentTop) {
// 		window.scrollTo(null, currentTop);
// 		upDownButton.textContent = '▲';
// 		currentTop = null;
// 		return;
// 	}
//
// 	currentTop = window.pageYOffset + upDownButton.offsetTop;
//
// 	window.scrollTo(0, 0);
// 	upDownButton.textContent = '▼';
// 	upDownButton.hidden = false;
//
// }, false);



// task 3 (Загрузка видимых изображение)
function isVisible(elem) {
	let coords = elem.getBoundingClientRect();
	let windowHeight = document.documentElement.clientHeight;

	let topVisible = coords.top > 0 && coords.top < windowHeight;
	let bottomVisible = coords.bottom < windowHeight && coords.bottom < 0;

	return topVisible || bottomVisible;
}


function showVisible() {
	let imgs = document.getElementsByTagName('img');

	for (let i = 0; i < imgs.length; i++) {
		let img = imgs[i];

		let realSrc = img.getAttribute('realSrc');
		if (!realSrc) continue;

		if (isVisible(img)) {
			img.src = realSrc;
			img.setAttribute('realSrc', '');
		}
	}
}

window.onscroll = showVisible;
showVisible();
