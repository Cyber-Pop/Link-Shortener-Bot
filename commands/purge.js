module.exports = {
  name: 'purge',
  description: 'Bulk deletes messages in the channel it\'s used in',
  ownerOnly: true,
  guildOnly: false,
  args: true,
  cooldown: 3,
  usage: '',
  category: "moderation",
  execute(msg, args, client, config, prefix, axios, Discord, avatar, blacklist) {
    const amount = parseInt(args[0]) + 1;
    msg.channel.bulkDelete(amount, true)
    .then(function (messages) {
      msg.channel.send(`Deleted ${messages.size - 1} messages`)
    })
  .catch(console.error);

      const embed = new Discord.MessageEmbed()
        .setColor(config.mainColor)
        .setAuthor(`Success`, avatar)
        .setDescription(`Testing connection...`)


  }
}