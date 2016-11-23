// task 2 (Поймать переход по ссылке)
// let contents = document.getElementById('contents');
//
// contents.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	let target = event.target;
//
// 	if (!target.closest('a')) return;
//
// 	target = target.closest('a');
// 	let url = target.getAttribute('href');
//
// 	let answer = confirm(`Уйти на ${url}?`);
// 	if (answer == true) {
// 		window.open(url);
// 	} else return;
// });



// task 3 (Галерея изображений)
let largeImg = document.getElementById('largeImg');

document.getElementById('thumbs').onclick = function(e) {
	let target = e.target;

	while (target != this) {

		if (target.nodeName == 'A') {
			showThumbnail(target.href, target.title);
			return false;
		}

		target = target.parentNode;
	}

}

function showThumbnail(href, title) {
	largeImg.src = href;
	largeImg.alt = title;
}

// preload imgs
let imgs = thumbs.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
	let url = imgs[i].parentNode.href;

	let img = document.createElement('img');
	img.src = url;
}
