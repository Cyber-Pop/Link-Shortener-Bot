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
      description: `• Made some embed colors match the bot's icon
                    • Moved some of the success/error messages to a sepereate file to make changing easier
      
                    That's it folks stay tuned for the next update`, 
      author: { 
        name: `Changelog`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}