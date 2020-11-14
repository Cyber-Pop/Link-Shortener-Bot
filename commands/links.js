module.exports = {
  name: 'links',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
 execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    msg.channel.send(`These are my links!`)
    if (msg.author.id === `476188720521805825`) {
      msg.channel.send(`Also Daniel don't worry. I will make this a embed so please don't annoy me`)
    }

  }
}