const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const status = { activity: { name: '>help', type: 'WATCHING' }, status: 'dnd' };
const axios = require('axios');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence(status)
    .then(console.log(`Status set`))
    .catch(console.error);
});

const shorten = (link, msg) => {
  if (!link) {
    console.log(`NO LINK!!!!!!!!!!!!!!!!!!!!!!`)
  }

  axios.get(`https://is.gd/create.php?format=simple&url=${link}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
    msg.channel.send(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  console.log(args)

  if (command === `help`) {
    let avatar = client.user.displayAvatarURL();

    let embed =  {
        color: 0x9900ff,
        title: `Commands`,
        description: `List of available commands:\n\n**${prefix}help:** You're viewing it right now\n**${prefix}info:** Show info about the bot\n**${prefix}shorten [url]:** Shortens a link`,
        author: {
		    name: `Help`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})

  } else if (command === `info`) {
    let avatar = client.user.displayAvatarURL();


    let embed =  {
        color: 0x9900ff,
        title: `About Me`,
        description: `I started off as a side project meant to put my owners skills to the test in combining various things that I learned throughout my coding journer`,
        fields: [
          {
		    	  name: 'Code',
			      value: 'The code of the bot is open source. This mean you can host it yourself it I the owner breaks the main version (99% chace that he will). Just beware it is a a f\\*\\*\\*\\*\\*\\* mess. Click here to see the code. And remember you have been warned',
		      }
        ],
        author: {
		    name: `Info`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
  }
  
  else if (command === `shorten`) {
    if (!args.length) {
      msg.channel.send(`You didn't provide a link ${msg.author}`)
    } else {
       shorten(encodeURIComponent(args[0]), msg)
    }
  }
});

client.login(process.env.BOT_TOKEN);