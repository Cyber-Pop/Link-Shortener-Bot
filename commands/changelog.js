module.exports = {
  name: 'changelog',
  args: false,
  usage: '',
  execute(msg, args, client) {
    let avatar = client.user.displayAvatarURL();
    let embed = {
      color: 0x9900ff,
      title: `Version 2`,
      description: `Current Version: 2\n\n• Added changelog command\n• Made code less messy\n• Bot now says correct usage if arguments are missing\n• Added v.gd as a shortner\n\n• New ping command (It's useless but every bot ***must*** have one\n\nThat's it folks stay tuned for the next update`, 
      author: { 
        name: `Changelog`, 
        icon_url: avatar
      }
    }

    msg.channel.send({ embed: embed })
  }
}