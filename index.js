require('dotenv').config();
const { Bot } = require('grammy');
require('dotenv').config({ path: './src/.env' });

const bot = new Bot(process.env.BOT_API_KEY);

// /start
bot.command('start', async (ctx) => {
    await ctx.reply(
        'Привет! Я помогу тебе подготовиться к собеседованию на позицию фронтенд-разработчика! Выбери тему:'
    );
    });

bot.start();
