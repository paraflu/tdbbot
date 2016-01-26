var sprintf = require('prinf');

Mention = function() {
  this.mention = new RegExp(/@tdb_bot/i);

  this.onMessage = function(bot, chat_id, from, message)
  {
    var myZap = new RegExp(/myzap/i);
    if (myZap.test(Message.from.username))
    {
      this.sendMessage(chat_id, sprintf("Vanculo %s!", Message.from.username));
    }
    var offesa = new RegExp(/merda|s.ronzo|scemo|stupido/i);

    if (offesa.test(message)) {
      this.sendMessage(chat_id, sprintf("chi dice sa di esserlo @%s nànanànàaaana", Message.from.username));
    }

  }
}

module.exports = new Mention();
