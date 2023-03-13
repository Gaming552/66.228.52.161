
require('dotenv').config();                     //1. bringing in the dotenv objects

//console.log(process.env.DISCORDJS_BOT_TOKEN); //2. checking our token (password)
const { Client } = require('discord.js');       //3. import classes from discord.js
const client = new Client();                    //4. New Instance of out client class


client.login(process.env.DISCORDJS_BOT_TOKEN);   //5.Login with token
