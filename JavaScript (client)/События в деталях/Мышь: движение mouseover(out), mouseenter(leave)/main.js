// tast 1 (Поведение "вложенная подсказка")
let showingTooltip = null;

document.onmouseover = function(event) {
	let target = event.target;
	target = target.closest('*[data-tooltip]');
	if (!target) return;

	let tooltip = target.getAttribute('data-tooltip');
	if (!tooltip) return;

	let tooltipElem = document.createElement('div');
	tooltipElem.classList.add('tooltip');
	tooltipElem.innerHTML = tooltip;
	document.body.appendChild(tooltipElem);

	let coords = target.getBoundingClientRect();

	let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
	if (left < 0) left = 0;

	let top = coords.top -tooltipElem.offsetHeight - 5;
	if (top < 0) {
		top = coords.top + target.offsetHeight + 5;
	}

	tooltipElem.style.left = left + 'px';
	tooltipElem.style.top = top + 'px';

	showingTooltip = tooltipElem;
};

document.onmouseout = function(event) {
	if (showingTooltip) {
		document.body.removeChild(showingTooltip);
		showingTooltip = null;
	}
}
