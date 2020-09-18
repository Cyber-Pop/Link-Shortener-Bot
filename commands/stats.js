module.exports = {
  name: 'stats',
  args: false,
  usage: '',
  execute(msg, args, client) {
    let avatar = client.user.displayAvatarURL();
    let discordjs = require('discord.js')
    let embed =  {
        color: 0x9900ff,
        description: `
        **Current Version:** 2.0
        **Node Version:** ${process.version}
        **Discord.js:** ${discordjs.version}
        **Servers:** ${client.guilds.cache.size}
        **Channels:** ${client.channels.cache.size}
        **Users:** ${client.users.cache.size}`,
        author: {
		    name: `Stats`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
  }
}