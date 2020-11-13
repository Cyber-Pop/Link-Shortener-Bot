module.exports = {
  name: 'help',
  args: false,
  cooldown: 3,
  execute(msg, args, client, config, prefix, axios, Discord) {
    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: strings.mainColor,
      title: `Commands`,
      description: `List of available commands:\n\n**${prefix}help:** You're viewing it right now\n**${prefix}info:** Shows info about the bot\n**${prefix}stats:** Show simple statistics about the bot\n**${prefix}changelog:** Shows most recent changes\n**${prefix}ping:** Replies back with Pong!\n**${prefix}shorten [url]:** Shortens a link\n**${prefix}vgd [url]:** Shortens a link using v.gd`, 
      author: { 
        name: `Help`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}