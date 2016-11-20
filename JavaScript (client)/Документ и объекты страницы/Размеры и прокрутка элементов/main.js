// task 1 (Найти размер прокрутки снизу)
// let node = document.getElementById('example'),
// 	scrollBottom;
//
// scrollBottom = node.scrollHeight - (node.scrollTop + node.clientHeight);
// console.log(scrollBottom);



// task 2 (Узнать ширину полосы прокрутки)
// let div = document.createElement('div');
//
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// div.style.visibility = 'hidden';
//
// document.body.append(div);
//
// let scrollWidth = div.offsetWidth - div.clientWidth;
//
// document.body.removeChild(div);
//
// console.log(scrollWidth);



// task 3 (Подменить div на другой с таким же размером)
// var div = document.getElementById('moving-div');
// let computedStyleDiv = window.getComputedStyle(div);
//
// div.style.position = 'absolute';
// div.style.right = div.style.top = 0;
//
// // option 1 (создание нового элемента)
// // let placeholder = document.createElement('div');
// //
// // placeholder.style.cssText = `background-color: ${computedStyleDiv.backgroundColor}; \
// // 	border: ${computedStyleDiv.border}; \
// // 	height: ${computedStyleDiv.height}; \
// // 	padding: ${computedStyleDiv.padding}; \
// // `;
//
// // option 2 (клонирование исходного DOM-элемента)
// let placeholder = div.cloneNode(false);
//
// placeholder.style.position = 'static';
// placeholder.style.height = computedStyleDiv.height;
//
// // вставляем элемент
// document.body.insertBefore(placeholder, div);



// task 4 (Поместите мяч в центр поля)
// let ball = document.getElementById('ball');
// let field = document.getElementById('field');
//
// ball.style.top = field.clientHeight / 2 - ball.offsetHeight / 2 + 'px';
// ball.style.left = field.clientWidth / 2 - ball.offsetWidth / 2 + 'px';



// task 5 (Расширить элемент)
var elem = document.getElementById("elem");

elem.style.width = 'auto';
