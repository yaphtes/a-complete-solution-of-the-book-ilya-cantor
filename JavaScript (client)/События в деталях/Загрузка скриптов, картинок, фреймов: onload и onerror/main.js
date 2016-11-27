// task 1 (Красивый "ALT")
// function replaceImg() {
// 	let divs = document.querySelectorAll('div.img-replace');
//
// 	for (let i = 0; i < divs.length; i++) (function(i) {
// 		let img = document.createElement('img');
//
// 		img.src = divs[i].getAttribute('data-src');
// 		img.className = 'replace-img';
// 		console.log(img);
//
//
// 		img.onload = function() {
// 			divs[i].parentNode.replaceChild(img, divs[i]);
// 		};
// 	})(i);
// }
//
// replaceImg();



// task 2 (Загрузить изображения с коллбэком)
// function preloadImages(sources, callback) {
// 	let counter = 0;
//
// 	function onLoad() {
// 		counter++;
// 		if (counter == sources.length) callback();
// 	}
//
// 	for (let i = 0; i < sources.length; i++) {
// 		let img = document.createElement('img');
// 		img.onload = img.onerror = onLoad;
// 		img.src = sources[i];
// 	}
// }
//
// preloadImages(["1.jpg", "2.jpg", "3.jpg"], callback);



// task 3 (Скирпт с колбеком)
// function addScript(src, callback) {
// 	let script = document.createElement('script');
// 	script.src = src;
//
// 	let anotherScript = document.getElementsByTagName('script')[0];
// 	anotherScript.parentNode.insertBefore(script, anotherScript);
//
// 	script.onload = callback;
// }



// task 4 (Скрипты с колбеком)
function addScripts(scripts, callback) {
	let counter = 0;

	for (let i = 0; i < scripts.length; i++) {
		let script = scripts[i];
		counter++;

		if (counter == scripts.length) callback();
	}
}
