module.exports = {
  name: 'stats',
  args: false,
  usage: '',
  execute(msg, args, client) {
    let avatar = client.user.displayAvatarURL();
    let embed =  {
        color: 0x9900ff,
        description: `**Current Version:** 2.0 
        **Servers:** ${client.guilds.cache.size}`,
        author: {
		    name: `Stats`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
  }
}