
// ID: 802142854419447808
// Invite link: https://discord.com/api/oauth2/authorize?client_id=802142854419447808&scope=bot&permissions=1

// access the discord.js files
const Discord = require("discord.js");

// create a new application
var client = new Discord.Client();

// require password from external file
const {
    token
} = require("./token.json");

// ready event
client.on("ready", () => {
    console.log("This bot is now online: " + client.user.tag);
});

// message event
client.on("message", message => {
    // user input to lower case
    const inputToLowerCase = message.content.toLowerCase();

    // randomreward command
    if (inputToLowerCase.includes("!randomreward") && message.author.bot == false){
        // array of strings
        var decoded_message = inputToLowerCase.split(" ");

        // amount of treasure chests before flooring the number
        var correct_number = Number(decoded_message[1]);

        // amount of treasure chests after flooring the number
        var floored_number = Math.floor(correct_number);
       
        // 1-10000
        if (decoded_message[0] == "!randomreward" && Number(floored_number) && decoded_message.length == 2 && floored_number > 0 && floored_number < 10001){
            // Variable holding all the item rolls
            var reward_rolls = 0;

            // total amount of rare rewards
            var total_ranger_boots = 0;
            var total_wizard_boots = 0;
            var total_holy_boots = 0;

            // for loop determining amount of rolls
            for (var i = 0; i < floored_number; i++){
                var rolls_this_chest = Math.floor(Math.random() * 3) + 3;
                reward_rolls += rolls_this_chest;
            }

            // for loop each reward roll. 1-1000
            for (var i = 0; i < reward_rolls; i++){
                // roll 1-1000
                var reward_roll = Math.floor(Math.random() * 1000) + 1;
                
                // if roll is 100, increase ranger boots
                if (reward_roll == 100){
                    total_ranger_boots++;
                }

                // if roll is 200, increase wizard boots
                else if (reward_roll == 200){
                    total_wizard_boots++;
                }

                // if roll is 300, increase holy boots
                else if (reward_roll == 300){
                    total_holy_boots++;
                }
            }

            console.log("ranger boots: " + total_ranger_boots);
            console.log("wizard boots: " + total_wizard_boots);
            console.log("holy boots: " + total_holy_boots);

            // reply with the amount of rewards
            message.reply("You received the following rewards based of your number of treasure chests: " + floored_number + "\n"
            + "ranger boots: " + total_ranger_boots + "\n" + "wizard boots: " + total_wizard_boots + "\n" + "holy boots: " + total_holy_boots);
        }

        // wrong input
        else {
            console.log("wrong input");
        }
    }

    // help command
    else if (inputToLowerCase == "!help"){
        message.reply("There are 1 command, !randomreward <number>");
    }
});










//3.We need to login now with our token
client.login('ODM5MDAzMjQwNTE5MTcyMTE3.YJDUqA.D_gw8bMm9gmj-dyUWcqCXktlsRk');










