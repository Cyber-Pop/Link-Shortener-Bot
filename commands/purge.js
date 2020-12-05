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
    const amount = args[0] + 1;
    msg.channel.bulkDelete(amount, true)
    .then(function (messages) {
      console.log(`Bulk deleted ${messages.size} messages`)
    })
  .catch(console.error);

      const embed = new Discord.MessageEmbed()
        .setColor(config.mainColor)
        .setAuthor(`Success`, avatar)
        .setDescription(`Testing connection...`)


  }
}