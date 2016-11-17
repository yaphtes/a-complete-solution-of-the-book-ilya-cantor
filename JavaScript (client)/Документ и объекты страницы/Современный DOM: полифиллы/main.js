// task 1
if (Element.prototype.matches === undefined) {
	Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mosMatchesSelector ||
		Element.prototype.msMatchesSelector;
}



// task 2
if (Element.prototype.closest === undefined) {
	Element.prototype.closest = function(cssSelector) {
		var node = this;

		while (node) {
			if (node.matches(cssSelector)) {
				return node;
			} else {
				node = node.parentElement;
			}
		}

		return null;
	}
}



/// task 3
if (document.documentElement.textContent == undefined) {
	Object.defineProperty(document.documentElement, textContent, {
		get: function() {
			return this.innerText;
		},

		set: function(text) {
			this.innerText = text;
		}
	});
}
