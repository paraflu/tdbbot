
const STK_JARVIS='BQADBAADPQQAAv1q5gNSipU1gQABY-UC';
const STK_COC = 'BQADAQAD6AEAAsGZigABPCp4PLTfUA8C';

FireOnText = function()
{
     this.ceggiaL8 = new RegExp(/ceggia.*l8/i);
     this.fossaltaL8 = new RegExp(/fossalta|fossotto/i);
     this.coc = new RegExp(/clash|coc|clash of clans/i);
}

FireOnText.prototype.onMessage = function(bot, chat_id, from, message)
{
     if (text === undefined)
	return;

     if (this.ceggiaL8.test(text)) {
       this.sendSticker(chat_id, STK_JARVIS);
       return;
     }

     if (this.fossaltaL8.test(text)) {
       this.sendPhoto(chat_id, fs.createReadStream('images/fossaltal8.jpg'), 'FOSSALTA L8');
       return;
     }
	
     if (this.coc.test(text)) {
     	this.sendSticker(chat_id, STK_COC);
	return;
     }

}

module.exports = new FireOnText();
