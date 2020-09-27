module.exports = {
  name: 'help',
  args: false,
  cooldown: 3,
  guildOnly: false,
  execute(msg, arg, client, strings) {
    const config = require('../config.json');
    const prefix = config.prefix;

    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: strings.mainColor,
      title: `Commands`,
      description: `List of available commands:\n\n**${prefix}help:** You're viewing it right now
      **${prefix}info:** Shows info about the bot
      **${prefix}stats:** Show simple statistics about the bot
      **${prefix}changelog:** Shows most recent changes
      **${prefix}ping:** Replies back with Pong!
      **${prefix}shorten [url]:** Shortens a link
      **${prefix}vgd [url]:** Shortens a link using v.gd`, 
      author: { 
        name: `Help`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}