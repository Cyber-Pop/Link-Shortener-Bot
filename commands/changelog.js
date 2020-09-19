module.exports = {
  name: 'changelog',
  args: false,
  usage: '',
  execute(msg, args, client) {
    const config = require('../config.json');
    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: 0x9900ff,
      title: `Version 2.0`,
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