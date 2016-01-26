var printf = require('printf');
var fs = require('fs');

const STK_JARVIS='BQADBAADPQQAAv1q5gNSipU1gQABY-UC';
const STK_COC = 'BQADAQAD6AEAAsGZigABPCp4PLTfUA8C';

FireOnText = function()
{
     this.ceggiaL8 = new RegExp(/ceggia.*l8/i);
     this.fossaltaL8 = new RegExp(/fossalta|fossotto/i);
     this.coc = new RegExp(/clash|coc|clash of clans/i);
     this.jesolol8 = new RegExp(/jesolo.*l8/i);
     this.figa = new RegExp(/figa/i);
     this.tette = new RegExp(/tett[ae]|tettone/i);
     this.linkazzo = new RegExp(/linkazzo|link\sa\scazzo/i);
}

FireOnText.prototype.onMessage = function(bot, chat_id, from, message)
{
     try {
       var combo=0;
	     if (text === undefined)
		      return;

	     if (this.ceggiaL8.test(text)) {
	       bot.sendSticker(chat_id, STK_JARVIS);
         combo++;
	       //return;
	     }

	     if (this.fossaltaL8.test(text)) {
	       bot.sendPhoto(chat_id, fs.createReadStream('images/fossaltal8.jpg'), 'FOSSALTA L8');
         combo++;
	       //return;
	     }

	     if (this.coc.test(text)) {
		      bot.sendSticker(chat_id, STK_COC);
          combo++;
		      //return;
	     }

       if (this.figa.test(text) || this.tette.test(text)) {
         bot.sendSticker(chat_id, printf("@%s verghine...", from.usrername));
         combo++;
       }

	     if (this.jesolol8.test(text) && from.username !== undefined) {
	       bot.sendMessage(chat_id, printf("seeeee @%s credici..", from.username));
         combo++;
         //return;
	     }

       if (combo > 3) {
         bot.sendMessage(printf("@%s ... GENIO!!!", from.username));
       } else if (combo > 0) {
         bot.sendMessage(printf("@%s ... COMBO!!!", from.username));
       }

     } catch (e) {
	     console.log("Errore in FireOnText.onMessage " + e.toString());
     }

}

module.exports = new FireOnText();
