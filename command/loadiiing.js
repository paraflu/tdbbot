var printf = require("printf");
var RandomMessage = require(__dirname + "/../api/randommessages.js");

var Loadiiing = function() {
  this.messages = new RandomMessage();
  this.messages.push("weee @%s buongiorno!!");
  this.messages.push("@%s a che livello sei di CoC?");
}


Loadiiing.prototype.onMessage = function(bot, chat_id, from, message)
{
	var Loadiiing = new RegExp(/MikaMohawk/i);
	var buongiorno = new RegExp(/buon\s*giorno|ciao/i);
	if (from !== undefined && Loadiiing.test(from.username)) {
	  bot.sendMessage(chat_id, printf(this.messages.getMessage(), from.username));
	}
}

module.exports = new Loadiiing();
