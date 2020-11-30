module.exports = {
  name: 'evall',
  description: 'Runs Javascript code on all shards. This command is owner only and will not work for self hosted versions not using sharding',
  ownerOnly: true,
  guildOnly: false,
  args: true,
  cooldown: 3,
  usage: '<code>',
  category: "fun",
 execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    let code = args.join(' ');
    let returned = ``;
    let success;
    const embed = new Discord.MessageEmbed()
    .addField(`📤 Original Code`, code)
    .setFooter(`Requested by ${msg.author.tag}`)

  async function run() {
    try {
      let token = code.search('client.token')
      if (token !== -1) {
        returned += `Nice Try`
      } else {
        let rawReturned = await client.shard.broadcastEval(code);
          returned += rawReturned
      }
      embed.addField(`📥 Result`, returned)
      embed.setAuthor(`Success!`, avatar)
      embed.setColor(config.mainColor)
      msg.react(config.successEmoji)
    } catch (e) {
      returned += e;

      embed.addField(`📥 Result`, returned)
      embed.setAuthor(`Error`, avatar)
      embed.setColor(config.errorColor)
      msg.react(config.errorEmoji)
    }
      msg.channel.send(embed)
  }

    run()
  }
}