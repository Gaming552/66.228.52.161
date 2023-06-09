
const Telegraf = require('telegraf');

const bot = new Telegraf('1878559274:AAE0cQnERkIftx48occlHU54_jyrE9YQ8KA');

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
`;

bot.use((ctx, next) => {
  if (ctx.updateSubTypes[0] == "text") {
    bot.telegram.sendMessage(-333181632, ctx.from.username + " said: " + ctx.message.text)
  } else {
    bot.telegram.sendMessage(-333181632, ctx.from.username + " sent " + ctx.updateSubTypes[0]);
  }
  next();
})

bot.start((ctx) => {
  ctx.reply("Hi I am Echo Bot");
  ctx.reply(helpMessage);
})

bot.help((ctx) => {
  ctx.reply(helpMessage);
})

bot.command("echo", (ctx) => {
  let input = ctx.message.text; //get input from user
  let inputArray = input.split(" "); //split input by spaces
  let message = ""; //create variable for message to output to user

  if (inputArray.length == 1) { //check if array just contains "/echo"
    message = "You said echo";
  } else {
    inputArray.shift(); //remove first element in array - "/echo"
    message = inputArray.join(" "); //join all elements into a string separated by spaces
  }

  ctx.reply(message); //reply message to user
})



bot.launch();

