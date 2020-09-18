module.exports = {
  name: 'stats',
  args: false,
  usage: '',
  execute(msg, args, client) {
    let avatar = client.user.displayAvatarURL();
    let discordjs = require('discord.js')
    let embed =  {
        color: 0x9900ff,
        fields: [
          {
            name: `Current Version`,
            value: `2.0`,
            inline: true
            
          },
          {
            name: `Nodejs Version`,
            value: `${process.version}`,
            inline: true
            
          },
          {
            name: `Discord.js Version`,
            value: `v${discordjs.version}`,
            inline: true
            
          },
          {
            name: `Servers`,
            value: `${client.guilds.cache.size}`,
            inline: true
            
          },
          {
            name: `Channels`,
            value: `${client.channels.cache.size}`,
            inline: true
            
          },
          {
            name: `Users`,
            value: `${client.users.cache.size}`,
            inline: true
            
          }
        ],
        author: {
		    name: `Stats`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
  }
}