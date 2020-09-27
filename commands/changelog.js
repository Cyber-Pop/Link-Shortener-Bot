module.exports = {
  name: 'changelog',
  args: false,
  cooldown: 3,
  guildOnly: false,
  execute(msg, args, client, strings) {
    const config = require('../config.json');
    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: strings.mainColor,
      title: `Version 3.0`,
      description: `• Added a !stats command
      
                    That's it folks stay tuned for the next update`, 
      author: { 
        name: `Changelog`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}