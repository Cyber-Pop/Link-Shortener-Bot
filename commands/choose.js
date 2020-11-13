module.exports = {
  name: 'choose',
  ownerOnly: true,
  guildOnly: false,
  args: true,
  cooldown: 3,
  usage: '<choice> | <choice>',
  execute(msg, args, client, config, prefix, axios, Discord) {
    const joined = args.join(' ')
    const split = joined.split('|')
    const min = 0
    const max = split.length - 1
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    const embed = new Discord.Embed()
    .setColor(config.mainColor)
    .setTitle(`test`)

    msg.channel.send(embed)
  }
}