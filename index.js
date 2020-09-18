const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const status = { activity: { name: prefix + 'help', type: 'LISTENING' }, status: 'online' };
const axios = require('axios');
const express = require('express')
const app = express()
const port = 3000

// Makes a new collection with all the files in /commands

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Loops through the commands then requires them and adds them to the collection

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Starts a express server to be able to receive pings and stay online

app.get('/', (req, res) => {
  res.send(`Hello`)
  console.log(`Pinged!`)
})

app.listen(port, () => {
  console.log(`Express running`)
})

// Fires once the bot is ready and logs it to the console then sets it status

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence(status)
    .then(console.log(`Status set`))
    .catch(console.error);
});

// Fires when a new messge is received

client.on('message', msg => {
  // If the command doesn't start with the prefix or is sent by a bot return
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  // Cuts off the prefix and .trim removes useless spaces .split seperates the string into words and puts it in a array
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  console.log(args)

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName)

  if (command.args && !args.length) {
    let embed =  {
        color: 0xff0000,
        title: `Missing Arguments`,
        description: `The correct usage is \`${prefix}${command.name} ${command.usage}\``,
        author: {
		    name: `Error`,
		    icon_url: client.user.displayAvatarURL()
      }
    }

    return msg.channel.send({embed : embed})
  }

  try {
    command.execute(msg, args, client);
  } catch (error) {
    console.error(error);
    msg.reply('An error occured while running your command');
  };

})

client.login(process.env.BOT_TOKEN);