console.log(process.env.TOKEN);

var l = require(__dirname + "/command/linguaggio.js");

var bot = {};
bot.sendMessage = function(chat_id, message) {
  console.log("bot message " + message);
}

var user = {};
user.username = "fas";

l.onMessage(bot, 1, user, "cazzo");
