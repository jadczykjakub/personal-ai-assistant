import TelegramBot from 'node-telegram-bot-api';
import config from '../config/config';

class TelegramService {
  private bot: TelegramBot;

  constructor() {
    if(!config.telegram.token) {
      throw new Error('Telegram token is missing');
    }

    this.bot = new TelegramBot(config.telegram.token, { polling: true });

    this.bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const messageText = msg.text;
      
        if (messageText === '/start') {
          this.bot.sendMessage(chatId, `Welcome to the bot!  ${JSON.stringify(msg)}`);
        }
      });
  }
}

export default TelegramService;