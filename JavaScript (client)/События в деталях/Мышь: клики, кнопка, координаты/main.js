// task 1 (Список с выделением)
// let ul = document.getElementById('list');
// let lastClickedLi = null;
//
// ul.onclick = function(event) {
// 	let target = event.target;
//
// 	if (target.tagName != 'LI') return;
//
// 	if (event.metaKey || event.ctrlKey) {
// 		toggleSelect(target);
// 	} else if (event.shiftKey) {
// 		selectFromLast(target);
// 	} else {
// 		selectSingle(target);
// 	}
// 	lastClickedLi = target;
// }
//
// ul.onmousedown = function() {
// 	return false;
// }
//
//
// function toggleSelect(li) {
// 	li.classList.toggle('selected');
// }
//
//
// function selectFromLast(target) {
// 	var startElem = lastClickedLi || ul.children[0];
//
// 	var isLastClickedBefore = startElem.compareDocumentPosition(target) & 4;
//
// 	if (isLastClickedBefore) {
// 		for (var elem = startElem; elem != target; elem = elem.nextElementSibling) {
// 			elem.classList.add('selected');
// 		}
// 	} else {
// 		for (var elem = startElem; elem != target; elem = elem.previousElementSibling) {
// 			elem.classList.add('selected');
// 		}
// 	}
// 	elem.classList.add('selected');
// }
//
//
// function selectSingle(li) {
// 	deselectAll();
// 	li.classList.add('selected');
// }
//
//
// function deselectAll() {
// 	for (let i = 0; i < ul.children.length; i++) {
// 		let elem = ul.children[i];
// 		elem.classList.remove('selected');
// 	}
// }



// task 2 (Проверка клика на заголовке)
var tree = document.getElementById('tree');

/* проверить на попадание события в заголовок LI */
function isOverTitle(evt, li) {
	/* обернуть заголовок в span */
	var titleWrapper = document.createElement('span');
	var titleTextNode = li.firstChild; // <li>TITLE...
	li.insertBefore(titleWrapper, titleTextNode); // <li><span></span>TITLE
	titleWrapper.appendChild(titleTextNode); // <li><span>TITLE</span>

	/* определить, был ли клик по координатам - в SPAN ?*/
	var isClickOnTitle = (document.elementFromPoint(evt.clientX, evt.clientY) == titleWrapper);

	/* в любом случае вернуть заголовок в текст обратно перед тем как идти дальше */
	titleWrapper.removeChild(titleWrapper.firstChild); // <li><span></span>
	li.replaceChild(titleTextNode, titleWrapper); // <li>TITLE...

	return isClickOnTitle;
}

/* отслеживаем клики на всём дереве */
tree.onclick = function(evt) {
	var evt = evt || event;
	var target = evt.target || evt.srcElement;


	if (!isOverTitle(evt, target)) {
		return; // клик не на заголовке
	}

	/* раскрыть-закрыть детей */
	var node = target.getElementsByTagName('ul')[0];
	if (!node) return; // нет детей

	node.style.display = node.style.display ? '' : 'none';
}
