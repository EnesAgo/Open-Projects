require('dotenv').config();
const fetch = require('node-fetch');


const Discord = require('discord.js');
const client = new Discord.Client();

const keepAlive = require("./server")



client.on('ready', () => {
    console.log('our bot is ready to go!!!');
});

client.on('message', msg => {
    if(msg.channel.id === '884428741147783168'){

        if(msg.content === 'ping'){
            msg.reply('pong')
        }

    }    
});

client.on('message', musicHelp);

client.on('message', calculate);

client.on('message', giffSender);

function calculate(msg) {
    if(msg.channel.id === '884725801990361109'){
        let msgArray = Array.from(msg.content.split(" "));


            if(msgArray[0] === '+'){
                msgArray.shift();
                let stringNums = [0];
                let sum = 0;

                console.log(msgArray)

                for (let i = 0; i < msgArray.length; i++) {
                    sum += parseFloat(msgArray[i]);
                    console.log(msgArray[i])
                }

                console.log(sum)
                msg.reply(sum);
            }
            else if(msgArray[0] === '*'){
                msgArray.shift();
                let stringNums = [0];
                let sum = 1;

                console.log(msgArray)

                for (let i = 0; i < msgArray.length; i++) {
                    sum *= parseFloat(msgArray[i]);
                    console.log(msgArray[i])
                }

                console.log(sum)
                msg.reply(sum);
            }
            else if(msgArray[0] === '-'){
                let stringNums = [0];

                console.log(msgArray)

                let sum = parseFloat(msgArray[1]) - parseFloat(msgArray[2]);

                console.log(sum)
                msg.reply(sum);
            }
            else if(msgArray[0] === '/'){
                let stringNums = [0];

                console.log(msgArray)

                let sum = parseFloat(msgArray[1]) / parseFloat(msgArray[2]);

                console.log(sum)
                msg.reply(sum);
            }

    } 
}

function musicHelp(msg) {
    if(msg.channel.id === '884740221072183336'){
        if(msg.content.toLocaleLowerCase() === '!music-info' || msg.content.toLocaleLowerCase() === '!mhelp'){
            msg.reply(`
            !music-info {this info}
            !mhelp {this info}
            !clear-queue 
            !queue {see queue}
            !add {song name/url}
            !search - search for music
            !play - starts to play music/playlist
            !replay - replay the music/playlist
            !seek {m-minute, s-seccond}/ ex: !seek 1m 15s = go to 1minute 15seccond
            !record - record the music for later
            !stop-recording - get your record link for later
            !skip - skip the sont
            !stop - stop music
            "playlists from music.youtube.com"`);
        }
    }
}

async function giffSender(msg) {
    if(msg.channel.id === '884428741147783168' || msg.channel.id === '884392769387393066' || msg.channel.id === '884392789255786496' || msg.channel.id === '884392900497133589'){
        const msgarr = msg.content.split(" ");

        if(msgarr[0].toLocaleLowerCase() === '!gif'){
            
            let url = `https://g.tenor.com/v1/search?q=${msgarr}&key=${process.env.TENOR}&limit=8`;

            let response = await fetch(url);
            let data = await response.json();
            
            const randGif = Math.floor(Math.random() * data.results.length);

            msg.channel.send(data.results[randGif].url);

        }


    }
}

keepAlive()

client.login(process.env.BOT_TOKEN);
