module.exports = {
  name: 'eval',
  ownerOnly: true,
  guildOnly: false,
  args: true,
  cooldown: 3,
  usage: '<code>',
 execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    let code = args.join(' ');
    let returned = ``;
    let success;
    let oldEmbed = {
        footer: {
          "text": `Requested by ${msg.author.tag}`,
        },
        color: config.mainColor,
        fields: [
          {
            "name": "📤 Original Code",
            "value":`\`${code}\``
          },
          {
            "name": "📥 Result",
            "value": ""
          }
        ],
        author: {
          name: ``,
          icon_url: avatar
        }
      }

    const embed = new Discord.MessageEmbed()
    .addField(`📤 Original Code`, code)
    .setFooter(`Requested by ${msg.author.tag}`)

  async function run() {
    try {
      let token = code.search('client.token')
      if (token !== -1) {
        returned += `Nice Try`
      } else {
        let rawReturned = await eval(code);
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