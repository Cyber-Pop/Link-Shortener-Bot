module.exports = {
  name: 'say',
  description: 'If you can\'t tell what this one does. Then I\'m worried for you',
  ownerOnly: true,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
  execute(msg, args, client, config, prefix, axios, Discord, avatar, tags) {
      msg.channel.send(args.join(" "))
      try {
        msg.delete()
      } catch (e) {
        throw e
      }

  }
}