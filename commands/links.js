module.exports = {
  name: 'links',
  description: 'Shows various links related to the bot',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
 execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    const embed = new Discord.MessageEmbed()
    .setColor(config.mainColor)
    .setAuthor(`Links`, avatar)
    .addField(`Invite`, `[Click Here]()`)
    .addField(`Support Server`, `[Click Here]()`)
    .addField(`Website`, `[Click Here]()`)

  }
}