module.exports = {
  name: 'links',
  description: 'Shows various links related to the bot',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
 execute(msg, args, client, config, prefix, axios, Discord, avatar, tags) {
    const embed = new Discord.MessageEmbed()
    .setColor(config.mainColor)
    .setAuthor(`Links`, avatar)
    .addField(`Invite`, `[Click Here](https://dsc.gg/seashell)`)
    .addField(`Support Server`, `[Click Here](https://dsc.gg/sea)`)
    .addField(`Website`, `<:soon:777646807970742274>`)
    .addField(`Trello`, `[Click Here](https://trello.com/b/VB9TEZd9/seashell)`)

    msg.channel.send(embed)
  }
}