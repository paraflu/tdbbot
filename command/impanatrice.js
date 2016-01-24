var printf = require("printf");
var RandomMessage = require(__dirname + "/../api/randommessages.js");

var Impanatrice = function() {
  this.messages = new RandomMessage();
  this.messages.push("Impanatrice @%s buongiorno!!");
  this.messages.push("Nostra impanatrice @%s buongiorno!!");
  this.messages.push("@%s buongiorno!!");
  this.messages.push("@%s maestà!!");
}


Impanatrice.prototype.onMessage = function(bot, chat_id, from, message)
{
	var IMPANATRICE = new RegExp(/MikaMohawk/i);
	var buongiorno = new RegExp(/buon\s*giorno/i);
	if (from !== undefined && IMPANATRICE.test(from.username) && buongiorno.test(message)) {
	  bot.sendMessage(chat_id, printf(this.messages.getMessage(), from.username));
	}
}

module.exports = new Impanatrice();
