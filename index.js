const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const status = { activity: { name: 'for >help', type: 'LISTENING' }, status: 'dnd' };
const axios = require('axios');
const express = require('express')
const app = express()
const port = 3000

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



const shorten = (link, msg) => {
  axios.get(`https://is.gd/create.php?format=simple&url=${link}`)
  .then(function (response) {
    // handle success
      let avatar = client.user.displayAvatarURL();
      let embed =  {
        color: 0x00ff00,
        title: `Link`,
        description: `[${response.data}](${response.data})`,
        author: {
		    name: `Success`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
  })
  .catch(function (error) {
    // handle error

    //console.log(error.response.data)

    if (error.response.data === `Error: Please enter a valid URL to shorten`) {
      let avatar = client.user.displayAvatarURL();
      let embed =  {
        color: 0xff0000,
        title: `Invalid URL`,
        description: `Please try again with a valid URL`,
        author: {
		    name: `Error`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})

    } else if (error.response.data === `Error: Sorry, the URL you entered is on our internal blacklist. It may have been used abusively in the past, or it may link to another URL redirection service.`) {
      let avatar = client.user.displayAvatarURL();
      let embed =  {
        color: 0xff0000,
        title: `Blacklisted URL`,
        description: `This URL has been blacklisted. This can happen when it has been abused in the past or leads to URL shortner`,
        author: {
		    name: `Error`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
    }
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
        description: `I started off as a side project meant to put my owners skills to the test in combining various things that I learned throughout my coding journer. I'm the first bot that my owner made to actually be published. This means that support will probably be nonexistent and downtime might happen more often than expected`,
        fields: [
          {
		    	  name: 'Code',
			      value: 'The code of the bot is open source. This mean you can host it yourself it I the owner breaks the main version (99% chace that he will). Just beware it is a a f\\*\\*\\*\\*\\*\\* mess. Click [here](https://github.com/TheLimifiedLime/Link-Shortner-Bot) to see the code. And remember you have been warned',
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
    let avatar = client.user.displayAvatarURL();
    let embed =  {
        color: 0xff0000,
        title: `No Link Provided`,
        description: `You didn't provide a link ${msg.author}`,
        author: {
		    name: `Error`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
    } else {
       shorten(encodeURIComponent(args[0]), msg)
    }
  }
});

client.login(process.env.BOT_TOKEN);