module.exports = {
  name: 'say',
  description: 'If you can\'t tell what this one does. Then I\'m worried for you',
  ownerOnly: true,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
  category: "fun",
  execute(msg, args, client, config, prefix, axios, Discord, avatar, blacklist) {
      msg.channel.send(args.join(" "))
      try {
        msg.delete()
      } catch (e) {
        throw e
      }

  }
}