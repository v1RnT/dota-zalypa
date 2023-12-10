require('dotenv').config();
const fs = require('fs');
const dota_gsi = require('./dota-gsi');
const { getHeroInfo, isGameEnded, getDataJSON } = require('./dota-gsi.js');


const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', (clnt) => {
    console.log(`\n${clnt.user.tag} is online.`) 
});

client.on('messageCreate', (msg) => {
    if (msg.author.username !== `Bot-poroshenko`){
        console.log(msg.author.username);
        if (msg.channelId === '980494289371033640'){
            msg.channel.send('hi');
        }
    }

    msg.content == 'idk' ? msg.reply(`${isGameEnded()}`) : false;

})





// client.on('messageCreate', (msg) => {
//     if (msg.content === 'Check' || msg.content === 'check') {
//         msg.reply(getDataJSON());
//         //console.log(getDataJSON);
//         //console.log('wth');
//         //msg.reply(`${getHeroInfo()}`);
//         //msg.reply(`${getDataJSON()}`);
//         //console.log(getDataJSON());
//         //getDataJSON()
//         //msg.reply(getDataJSON());
//     }
// })



client.login(process.env.TOKEN);