// task 1 (Масштабирование колесиком мыши)
// let block = document.getElementById('text');
//
// let currentScale = 1;
//
// block.onwheel = function(event) {
// 	if (event.deltaY > 0) {
// 		currentScale += 0.05;
// 		block.style.transform = `scale(${currentScale})`;
// 	}
//
// 	if (event.deltaY < 0) {
// 		currentScale -= 0.05;
// 		block.style.transform = `scale(${currentScale})`;
// 	}
// 	return false;
// }



// task 2 (Прокрутка без влияния на стриницу)
document.addEventListener('wheel', function(event) {
	let area = event.target;
	if (area.tagName != 'TEXTAREA') return;

	area.style.overflowX = 'hidden';

	if (event.deltaY < 0 && area.scrollTop == 0) {
		event.preventDefault();
	}
	if (event.deltaY > 0 && area.scrollTop + area.clientHeight + area.scrollTop <= 1) {
		event.preventDefault();
	}
}, false);
