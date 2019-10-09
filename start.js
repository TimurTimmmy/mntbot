require('dotenv').config();
const Telegraf = require('telegraf');
const mBalance = require('./bin/getBallance');
const mBuyCoin = require('./bin/BuyCoins');
const mSellAll = require('./bin/SellAll');

const telBot = new Telegraf(process.env.TELEGRAM_TOKEN);

telBot.start((ctx) => ctx.reply('ololo'));
telBot.command('bal', async (ctx) => {
    let res = await mBalance.Ballance(process.env.WALLET_PROD);
    await ctx.reply(res);
});

telBot.on('text', async (ctx) =>{
    let str = ctx.message.text;
    let res = str.split(" ");
    if (res.length > 0 && res[0] == 'B')
        {
            let bal = await mBalance.Ballance(res[1]);
            ctx.reply(bal);
        }
    if (res.length > 0 && res[0] == 'Buy')
        {
            //Buy MNT 10 CAPITAL
            let pk = process.env.PRIVATE_KEY;
            await mBuyCoin.buyCoins(pk,res[1],res[2],res[3]);
            ctx.reply("Куплено: " + res[2] + " "+ res[3]);
        }
    if (res.length > 0 && res[0] == 'SellAll')
        {
            //SellAll CAPITAL MNT
            let pk = process.env.PRIVATE_KEY;
            await mSellAll.sellAll(pk,res[1],res[2]);
            ctx.reply("Проданы все: " + res[1]);
        }
    if (res.length > 0 && res[0] == 'Deal')
        {
            //формат Deal ЧТО СКОЛЬКО НАЧТО ТАЙМАУТ
            //Deal CAPITAL 10 MNT 60
            let pk = process.env.PRIVATE_KEY;
            ctx.reply("Сделка начата");
            await mBuyCoin.buyCoins(pk,res[3],res[2],res[1]);
            setTimeout(mSellAll.sellAll,res[4]*1000,pk,res[1],res[3]);
            setTimeout(ctx.reply,res[4]*1000+1000,("Успешная сделка"));
        }
        else
    {
        ctx.reply("Не понятно, что это: " + str);
    }
});

telBot.catch((err) => console.log("Ошибка", err));
telBot.launch(console.log("start bot"));