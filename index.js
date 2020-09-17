const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const status = { activity: { name: '>help', type: 'LISTENING' }, status: 'online' };
const axios = require('axios');
const express = require('express')
const app = express()
const port = 3000

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

app.get('/', (req, res) => {
  res.send(`Hello`)
  console.log(`Pinged!`)
})

app.listen(port, () => {
  console.log(`Express running`)
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence(status)
    .then(console.log(`Status set`))
    .catch(console.error);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  console.log(args)

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName)

  try {
    command.execute(msg, args, client);
  } catch (error) {
    console.error(error);
    msg.reply('An error occured while running your command');
  };

})

client.login(process.env.BOT_TOKEN);