// task 1 (Голосовалка "на событиях")
function Voter(options) {
	var elem = options.elem;

	var voteElem = elem.querySelector('.vote');

	elem.onclick = function(event) {
		// сам обработчик не меняет голос, он вызывает функцию
		if (event.target.closest('.down')) {
			voteDecrease();
		} else if (event.target.closest('.up')) {
			voteIncrease();
		}
	}

	elem.onmousedown = function() {
		return false;
	};

	// ----------- методы -------------

	function voteDecrease() {
		setVote(+voteElem.innerHTML - 1);
	}

	function voteIncrease() {
		setVote(+voteElem.innerHTML + 1);
	}

	function setVote(vote) {
		voteElem.innerHTML = +vote;
		var widgetEvent = new CustomEvent("change", {
			bubbles: true,
			detail: +vote
		});
		elem.dispatchEvent(widgetEvent);
	};

	this.setVote = setVote;
}

var voter = new Voter({
	elem: document.getElementById('voter')
});

voter.setVote(5);

document.getElementById('voter').addEventListener('change', function(e) {
	alert(e.detail); // новое значение голоса
});
