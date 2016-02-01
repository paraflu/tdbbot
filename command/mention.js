var sprintf = require('printf');
var cn = require('chuck-norris-api');


Mention = function() {
  this.mention = new RegExp(/@tdb_bot/i);

  this.cn_joke = function(chat_id)
  {
    var cn = require('chuck-norris-api');
    options = {}
    cn.getRandom(options).then(function (data) {
        this.sendMessage(chat_id, data.value.joke);
    });
  }

  this.onMessage = function(bot, chat_id, from, message)
  {
    var myZap = new RegExp(/myzap/i);
    if (myZap.test(from.username))
    {
      this.sendMessage(chat_id, sprintf("Vanculo %s!", from.username));
    }
    var offesa = new RegExp(/merda|s.ronzo|scemo|stupido|cazzo/i);

    if (offesa.test(message)) {
      this.sendMessage(chat_id, sprintf("chi dice sa di esserlo @%s nànanànàaaana", from.username));
    }

    var chuck = new RegExp(/\/chuck/i);
    if (chuck.test(message))
      this.cn_joke(chat_id);

  }
}

module.exports = new Mention();
