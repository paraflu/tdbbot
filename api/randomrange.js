var RandomIntRange = function() {
}

RandomIntRange.prototype.rnd = function(min, max) {
	var idx = Math.floor(Math.random() * max) + min;
	return idx;
}

module.exports = new RandomIntRange()
