module.exports = {
  name: 'changelog',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
   execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    let embed = {
      color: config.mainColor,
      title: `Version ` + config.botVersion,
      description: `• Fixed Embeds for mobile`, 
      author: { 
        name: `Changelog`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}