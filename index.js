const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
let prefix = config.prefix;
const status = { activity: { name: prefix + 'help', type: 'LISTENING' }, status: 'online' };
const axios = require('axios');
const chalk = require('chalk')

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

if (config.pingRequired) {
  const express = require('express')
  const app = express()
  const port = config.port

  app.get('/', (req, res) => {
    res.send(`Hello`)
    console.log(`Pinged!`)
  })

  app.listen(port, () => {
    console.log(`Express running`)
  })
}

// End Pinging Code

// Fires once the bot is ready and logs it to the console then sets it status

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence(status)
    .then(console.log(chalk.bgWhite(`INFO`),  `Status set`))
    .catch(console.error);
});

// Fires when a new message is received
client.on('guildCreate', guild => {
  if (!config.guildLoggingChannel) return;
  const avatar = client.user.displayAvatarURL();

  try {
    const humans = guild.members.cache.filter(member => !member.user.bot).size
    const bots = guild.members.cache.filter(member => member.user.bot).size

    let embed = new Discord.MessageEmbed()
    .setColor(config.mainColor)
    .setAuthor(`Joined ${guild.name}!`)
    .setDescription(`**Owner:** ${guild.owner.user.tag}\n**Owner ID:** ${guild.ownerID}\n**Server ID:** ${guild.id}\n**Total Members:** ${guild.memberCount}\n**Humans:** ${humans}\n**Bots:** ${bots}`)
    .setThumbnail(guild.iconURL())

    client.channels.cache.get(config.guildLoggingChannel).send(embed)

    guild.owner.send(`Thanks for adding me to ${guild.name}! To get started run \`${prefix}help\` `)
  } catch (e) {
    console.log(e)
  }
})

client.on('guildDelete', guild => {
  if (!config.guildLoggingChannel) return;
  const avatar = client.user.displayAvatarURL();

  try {
    const humans = guild.members.cache.filter(member => !member.user.bot).size
    const bots = guild.members.cache.filter(member => member.user.bot).size

    let embed = new Discord.MessageEmbed()
    .setColor(config.errorColor)
    .setAuthor(`Left ${guild.name}`)
    .setDescription(`**Owner:** ${guild.owner.user.tag}\n**Owner ID:** ${guild.ownerID}\n**Server ID:** ${guild.id}\n**Total Members:** ${guild.memberCount}\n**Humans:** ${humans}\n**Bots:** ${bots}`)
    .setThumbnail(guild.iconURL())

    client.channels.cache.get(config.guildLoggingChannel).send(embed)
  } catch (e) {
    console.log(e)
  }
})

client.on('message', msg => {
  // Checks for mentions and if one includes the bot it sends a info message
  if (msg.mentions.has(client.user.id)) {
    console.log(prefix)
    if (msg.author.bot) return;
    msg.channel.send(`Hey, I'm ${client.user.username}. My prefix is \`${guildPrefix}\``)
  }

  const avatar = client.user.displayAvatarURL();

  // If the command doesn't start with the prefix or is sent by a bot return
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  // Cuts off the prefix and .trim removes useless spaces .split seperates the string into words and puts it in a array

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName)

  if (command.ownerOnly && msg.author.id !== config.ownerID) {
    return msg.channel.send(`This command is owner only!`)
  }

  if (command.args && !args.length) {
    let message = `You are missing some required arguments`

    if (command.usage) {
      message += ` The correct usage is \`${prefix}${command.name} ${command.usage}\``
    }

    let embed = new Discord.MessageEmbed()
    .setColor(config.errorColor)
    .setAuthor(`Error`, avatar)
    .setTitle(`Missing Arguments`)
    .setDescription(message)

    return msg.channel.send(embed)
  }

  if (command.guildOnly && !msg.guild) {
    return msg.channel.send(`This command does not work in private messages`)
  } else if (!msg.guild.available) {
    return msg.channel.send(`This guild is currently unavailable. Please try again later`)
  }

  try {
    command.execute(msg, args, client, config, prefix, axios, Discord);
  } catch (e) {
    console.error(e);
    msg.channel.send(`Sorry <@${msg.author.id}> there was an error while trying to run your command. If this continues happenning please join the support server and report this error.\n\nThe error is:\n \`${e}\` `);
  };

})

client.login(process.env.BOT_TOKEN);
