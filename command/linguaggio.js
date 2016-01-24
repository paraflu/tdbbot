var printf = require("printf");
const util = require('util');
var RandomMessage = require(__dirname + "/../api/randommessages.js");

var Linguaggio = function() {
  this.messages = new RandomMessage();
  this.messages.push("Linguaggio @%s... mazzo!");
  this.messages.push("eddddai @%s linguaggio!");
  this.messages.push("@%s, baci tua madre con quella bocca?!");
  this.messages.push("@%s continuiamo?");
  this.messages.push("@%s LINGUAGGIO!");
  this.messages.push("@%s...!");
  this.messages.push("Linguaggio @%s!");
  //this.messages.push("<a href='https://it.wiktionary.org/wiki/volgare'>Linguaggio @%s</a>!");
}


Linguaggio.prototype.onMessage = function(bot, chat_id, from, message)
{
	var linguaggioRe = new RegExp(/[fv]anculo|[crml]azz[io]|merda/i);
	if (linguaggioRe.test(message)) {
		bot.sendMessage(chat_id, printf(this.messages.getMessage(), from.username), "HTML");
	}
}

module.exports = new Linguaggio();
