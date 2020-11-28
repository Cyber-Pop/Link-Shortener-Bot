module.exports = {
  name: 'vote',
  description: 'Gives you links to vote for the bot on various sites',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
 execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    const embed = new Discord.MessageEmbed()
    .setColor(config.mainColor)
    .setAuthor(`Links`, avatar)
    .setDescription(``)

    msg.channel.send(embed)
  }
}