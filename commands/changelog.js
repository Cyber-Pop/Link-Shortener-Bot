module.exports = {
  name: 'changelog',
  args: false,
  cooldown: 3,
  execute(msg, args, client, strings, prefix, axios) {
    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: strings.mainColor,
      title: `Version ` + strings.botVersion,
      description: `• Fixed Embeds for mobile`, 
      author: { 
        name: `Changelog`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}