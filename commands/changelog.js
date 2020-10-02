module.exports = {
  name: 'changelog',
  args: false,
  cooldown: 3,
  guildOnly: false,
  execute(msg, args, client, strings) {
    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: strings.mainColor,
      title: `Version ` + strings.botVersion,
      description: `Improved things on the Gihub repo (run ${strings.prefix}info to get a link)`, 
      author: { 
        name: `Changelog`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}