const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.555289887:AAGlrPpG8Opm6sgxXKITGDQ4xSlGQKU96nA)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
