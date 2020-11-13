module.exports = {
  name: 'changelog',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  usage: ''
  cooldown: 3,
  execute(msg, args, client, config, prefix, axios, Discord) {
    let avatar = client.user.displayAvatarURL();
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