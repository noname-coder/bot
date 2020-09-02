const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.1308047539:AAHAmthHFIU0_96x-ZxftLmK8J5NkA00sMA)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
