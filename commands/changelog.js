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
      description: `• Added changelog command\n• Made code less messy\n• Bot tells you correct usage if arguments are missing\n• Added v.gd as a link shortner (${config.prefix}vgd [link])\n• New ping command (It's useless but every bot ***must*** have one)\n\nThat's it folks stay tuned for the next update`, 
      author: { 
        name: `Changelog`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}