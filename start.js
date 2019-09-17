var fs = require("fs");
fs.readFile("/bot/tkn.txt")

const Telegraf = require('telegraf')
const BotTocken = fs;

const bot = new Telegraf(BotTocken)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
