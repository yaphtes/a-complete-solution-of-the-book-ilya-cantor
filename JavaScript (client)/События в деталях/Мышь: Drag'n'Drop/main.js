// task 1 (Слайдер)
// let sliderElem = document.getElementById('slider');
// let thumbElem = sliderElem.querySelector('.thumb');
//
// thumbElem.onmousedown = function(event) {
// 	let thumbCoords = getCoords(thumbElem);
// 	let shiftX = event.pageX - thumbCoords.left;
//
// 	let sliderCoords = getCoords(sliderElem);
//
// 	document.onmousemove = function(event) {
// 		// вычесть координаты родителя, т.к. position: relative
// 		let newLeft = event.pageX - shiftX - sliderCoords.left;
//
// 		if (newLeft < 0) {
// 			newLeft = 0;
// 		}
//
// 		let rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
// 		if (newLeft > rightEdge) {
// 			newLeft = rightEdge;
// 		}
//
// 		thumbElem.style.left = newLeft + 'px';
// 	};
//
// 	document.onmouseup = function(event) {
// 		document.onmousemove = document.onmouseup = null;
// 	};
//
// 	return false;
// }
//
//
// thumbElem.ondragstart = function() {
// 	return false;
// }
//
//
// function getCoords(elem) {
// 	let box = elem.getBoundingClientRect();
//
// 	return {
// 		top: box.top + pageYOffset,
// 		left: box.left + pageXOffset
// 	};
// }



// task 2 (Вставить супергероев по полю)
document.onmousedown = function(e) {

	var dragElement = e.target;

	if (!dragElement.classList.contains('draggable')) return;

	var coords, shiftX, shiftY;

	startDrag(e.clientX, e.clientY);

	document.onmousemove = function(e) {
		moveAt(e.clientX, e.clientY);
	};

	dragElement.onmouseup = function() {
		finishDrag();
	};


	// -------------------------

	function startDrag(clientX, clientY) {

		shiftX = clientX - dragElement.getBoundingClientRect().left;
		shiftY = clientY - dragElement.getBoundingClientRect().top;

		dragElement.style.position = 'fixed';

		document.body.appendChild(dragElement);

		moveAt(clientX, clientY);
	};

	function finishDrag() {
		// конец переноса, перейти от fixed к absolute-координатам
		dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
		dragElement.style.position = 'absolute';

		document.onmousemove = null;
		dragElement.onmouseup = null;
	}

	function moveAt(clientX, clientY) {
		// новые координаты
		var newX = clientX - shiftX;
		var newY = clientY - shiftY;

		// ------- обработаем вынос за нижнюю границу окна ------
		// новая нижняя граница элемента
		var newBottom = newY + dragElement.offsetHeight;

		// если новая нижняя граница вылезает вовне окна - проскроллим его
		if (newBottom > document.documentElement.clientHeight) {
			// координата нижней границы документа относительно окна
			var docBottom = document.documentElement.getBoundingClientRect().bottom;

			// scrollBy, если его не ограничить - может заскроллить за текущую границу документа
			// обычно скроллим на 10px
			// но если расстояние от newBottom до docBottom меньше, то меньше
			var scrollY = Math.min(docBottom - newBottom, 10);

			// ошибки округления при полностью прокрученной странице
			// могут привести к отрицательному scrollY, что будет означать прокрутку вверх
			// поправим эту ошибку
			if (scrollY < 0) scrollY = 0;

			window.scrollBy(0, scrollY);

			// резким движением мыши элемент можно сдвинуть сильно вниз
			// если он вышел за нижнюю границу документа -
			// передвигаем на максимально возможную нижнюю позицию внутри документа
			newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
		}


		// ------- обработаем вынос за верхнюю границу окна ------
		if (newY < 0) {
			// проскроллим вверх на 10px, либо меньше, если мы и так в самом верху
			var scrollY = Math.min(-newY, 10);
			if (scrollY < 0) scrollY = 0; // поправим ошибку округления

			window.scrollBy(0, -scrollY);
			// при резком движении мыши элемент мог "вылететь" сильно вверх, поправим его
			newY = Math.max(newY, 0);
		}


		// зажать в границах экрана по горизонтали
		// здесь прокрутки нет, всё просто
		if (newX < 0) newX = 0;
		if (newX > document.documentElement.clientWidth - dragElement.offsetHeight) {
			newX = document.documentElement.clientWidth - dragElement.offsetHeight;
		}

		dragElement.style.left = newX + 'px';
		dragElement.style.top = newY + 'px';
	}

	// отменим действие по умолчанию на mousedown (выделение текста, оно лишнее)
	return false;
}
