require('dotenv').config();
const { Bot, Keyboard, InlineKeyboard } = require('grammy');
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
    

    bot.hears(['HTML', 'CSS', 'JavaScript', 'React'], async (ctx) => {
        const inlineKeyboard = new InlineKeyboard()
        .text(
        'Получить ответ',
        JSON.stringify({
        type: ctx.message.text,
        questionId: 1,
        
        }),
        )
        .text('Отменить', 'cancel');
        
        await ctx.reply(`Что такое ${ctx.message.text}?`, {
        reply_markup: inlineKeyboard,
        });
        });

        bot.on('callback_query:data', async (ctx) => {
            if (ctx.callbackQuery.data === 'cancel') {
            await ctx.reply('Отмена');
            await ctx.answerCallbackQuery();
            return;
            }
            
            const callbackData = JSON.parse(ctx.callbackQuery.data);
            await ctx.reply(`${callbackData.type} – это составляющая фронтенда`);
            await ctx.answerCallbackQuery();
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
