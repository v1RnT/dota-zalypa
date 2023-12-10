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
// client.on('messageCreate', (msg1) => {
//     try{
//         if (msg1.content == 'idk') {
//             msg1.reply(`${isGameEnded()}`)
//         }
//     }
//     catch(e){
//         console.log(new Error('gg'));
//     }
// })

client.on('ready', (clnt) => {
    console.log(`\n${clnt.user.tag} is online.`) 
});

client.on('messageCreate', (msg) => {
    if (msg.content === 'Check' || msg.content === 'check') {
        getDataJSON();
        //console.log(getDataJSON);
        //console.log('wth');
        //msg.reply(`${getHeroInfo()}`);
        //msg.reply(`${getDataJSON()}`);
        //console.log(getDataJSON());
        //getDataJSON()
        //msg.reply(getDataJSON());
    }
})



client.login(process.env.TOKEN);