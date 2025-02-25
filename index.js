require('dotenv').config();
const { Bot } = require('grammy');
require('dotenv').config({ path: './src/.env' });

const bot = new Bot(process.env.BOT_API_KEY);

bot.start();
