//id: 834273327266267156
//invitation link: https://discord.com/api/oauth2/authorize?client_id=834273327266267156&scope=bot&permissions=1

//1.
const Discord = require('discord.js');
//2.
var client = new Discord.Client();

//7. Get our json token infor
const {
    token
} = require("./token.json");

//4.
client.on('ready', () =>{
    console.log('This bot is now online: ' + client.user.tag);
});

//5.
client.on('message', message => {
    var message_LC = message.content.toLowerCase();

    if( message_LC == 'hello' ) {
        message.reply('Hello right back to you ');
    }

    //5.1 testing 
    //console.log(message);
});

//3.login with token but on step 6 we are going to be moving this to a json file 
//client.login('ODM0MjczMzI3MjY2MjY3MTU2.YH-flQ._pgFj0TbSFlMvO6TQOshr1bIT4I');
//6. remove token and put it in a json file 
 client.login(token);
