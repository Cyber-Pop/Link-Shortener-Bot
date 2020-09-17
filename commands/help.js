module.exports = {
  name: 'help',
  execute(msg, arg, client) {
    const config = require('../config.json');
    const prefix = config.prefix;

    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: 0x9900ff,
      title: `Commands`,
      description: `List of available commands:\n\n**${prefix}help:** You're viewing it right now\n**${prefix}info:** Show info about the bot\n**${prefix}shorten [url]:** Shortens a link`, 
      author: { 
        name: `Help`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}