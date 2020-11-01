const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const strings = require('./strings.json');
let prefix = strings.prefix;
const status = { activity: { name: prefix + 'help', type: 'LISTENING' }, status: 'online' };
const axios = require('axios');
const { MongoClient } = require('mongodb');
const dbURL = process.env.URL;
const dbClient = new MongoClient(dbURL, {useUnifiedTopology: true});
let database;
let guilds;

// Makes a new collection with all the files in /commands

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Loops through the commands then requires them and adds them to the collection

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Starts a express server to be able to receive pings and stay online. If you are self hosting and don't need the pinging comment out the code. There are comments marking the start and end

// Start pinging code

if (strings.pingRequired) {
  const express = require('express')
  const app = express()
  const port = strings.port

  app.get('/', (req, res) => {
    res.send(`Hello`)
    console.log(`Pinged!`)
  })

  app.listen(port, () => {
    console.log(`Express running`)
  })
}

// End Pinging Code

async function dbSetup() {
  try {
    await dbClient.connect()
    database = dbClient.db('databases');
    guids = database.collection('guilds');
  } catch (e) {
    console.log(e)
  } finally {
    dbClient.close()
  }
}
dbSetup()

// Fires once the bot is ready and logs it to the console then sets it status

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence(status)
    .then(console.log(`Status set`))
    .catch(console.error);
});

// Fires when a new messge is received

client.on('message', msg => {



  if (msg.mentions.has(client.user.id)) {
    if (msg.author.bot) return;
    msg.channel.send(`Hey, I'm ${client.user.username}. My prefix is \`${guildPrefix}\``)
  }

  // If the command doesn't start with the prefix or is sent by a bot return
  if (!msg.content.startsWith(guildPrefix) || msg.author.bot) return;
  // Cuts off the prefix and .trim removes useless spaces .split seperates the string into words and puts it in a array

  const args = msg.content.slice(guildPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (strings.devMode) {
    console.log(args)
  }

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName)

  if (command.args && !args.length) {
    let message = strings.argsMissingDescription;

    if (command.usage) {
      message += ` The correct usage is \`${prefix}${command.name} ${command.usage}\``
    }

    let embed = {
      color: strings.errorColor,
      title: strings.argsMissingTitle,
      description: message,
      author: {
        name: strings.argsMissingName,
        icon_url: client.user.displayAvatarURL()
      }
    }
    return msg.channel.send({ embed: embed })
  }


  if (command.ownerOnly && msg.author.id !== strings.ownerID) {
    return msg.channel.send(`This command is owner only!`)
  }

  if (command.guildOnly && !msg.guild) {
    return msg.channel.send(strings.guildOnly)
  } else if (!msg.guild.available) {
    return msg.channel.send(strings.guildOnly)
  }

  try {
    command.execute(msg, args, client, strings, prefixes);
  } catch (error) {
    console.error(error);
    msg.reply(strings.runCommandError);
  };

})

client.login(process.env.BOT_TOKEN);
