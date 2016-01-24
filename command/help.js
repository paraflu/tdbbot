var printf = require("printf");

var apps = require(__dirname+'/../apps.json');

var Helper = function() {
	
}


Helper.prototype.onMessage = function(bot, chat_id, from, message)
{
	var regCommand = new RegExp(/\/(.*)\s*/);
	if (regCommand.test(message)) {
		var matcharray = message.match(regCommand);

		switch (matcharray[1]) {
			case 'help':
			    var message = ""; 
				for (app in apps) {
					if (apps[app].help !== undefined) {
						message += printf("/%s: %s", apps[app].command, apps[app].help);
					}
				}
				//message += "/help questo messaggio";
				
				bot.sendMessage(chat_id, message);
			break;
		}
	}	
}

module.exports = new Helper();
