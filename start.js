const Telegraf = require('telegraf')
var BotTocken = '555289887:AAGlrPpG8Opm6sgxXKITGDQ4xSlGQKU96nA'

const bot = new Telegraf(BotTocken)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
