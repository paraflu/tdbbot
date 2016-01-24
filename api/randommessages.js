var randomint = require(__dirname + "/randomrange.js");

module.exports = function RandomMessage() {
	this.messages = new Array();
	this.getMessage = function() {
		var idx = randomint.rnd(0, this.messages.length);
		return this.messages[idx];
	}

	this.push = function(msg) {
		this.messages.push(msg);
	}
}
