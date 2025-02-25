require('dotenv').config();
const { Bot, Keyboard } = require('grammy');
require('dotenv').config({ path: './src/.env' });

const bot = new Bot(process.env.BOT_API_KEY);

// /start
bot.command('start', async (ctx) => {
    const startKeyboard = new Keyboard()
    .text('HTML')
    .text('CSS')
    .row()
    .text('JavaScript')
    .text('React')
    .resized();
    
    await ctx.reply(
    'Привет! Я - Frontend Interview Prep Bot 🤖 \nЯ помогу тебе подготовиться к интервью по фронтенду',
    );
    
    await ctx.reply('С чего начнем? Выбери тему вопроса в меню 👇', {
    reply_markup: startKeyboard,
    });
    });
    

    bot.hears('HTML', async (ctx) => {
        await ctx.reply('Какой тег используется для создания ссылки?');
        });
        
// Обработка ошибок
bot.catch((err) => {
    const ctx = err.ctx;
    console.error(`Error while handling update ${ctx.update.update_id}:`);
    const e = err.error;
    if (e instanceof GrammyError) {
    console.error('Error in request:', e.description);
    } else if (e instanceof HttpError) {
    console.error('Could not contact Telegram:', e);
    } else {
    console.error('Unknown error:', e);
    }
    });
    

bot.start();
