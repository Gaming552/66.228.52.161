

//1 Creating our variables 
const Discord = require('discord.js');
const DiscordClient = new Discord.Client();

//2. Notifying server is on 
DiscordClient.on('ready', () => {
    console.log(`Logging in as ${DiscordClient.user.tag}!`);
});


//4.Trigger our event
DiscordClient.on('message', async msg => {
    if ( msg.content === '!object'){
       // console.log(msg.channel.guild)
        //4.2 use the channel     
    //    DiscordClient.channels.get('845171552110641152').send("Hello, someone used the !object command in a text channel called " + msg.channel.name + "in the server called " + msg.channel.guild.name);
	DiscordClient.channels.get('845161590843113472').send("Hello, someone used the !object command in a text channel called " );

    }
});



//3.login with our token
DiscordClient.login('ODQ0NDE4NjUzMTcyNjYyMjky.YKSIJw.f4LlU4Aik7GfN-Bkeizxj60DMj4');
