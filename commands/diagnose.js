module.exports = {
  name: 'diagnose',
  args: false,
  cooldown: 3,
  guildOnly: true,
  execute(msg, args, client) {
    //msg.guild.role
    msg.channel.send(msg.guild.name)
  }
}