module.exports = {
  ownerOnly: true,
  name: 'eval',
  cooldown: 3,
  args: true,
  usage: '<code>',
 execute(msg, args, client, config, prefix, axios, Discord) {
    let avatar = client.user.displayAvatarURL();
    let code = args.join(' ')
    let returned = ``
    let success;
    let embed = {
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

  async function run() {
    try {
      let token = code.search('client.token')
      if (token !== -1) {
        returned += `Nice Try`
      } else {
        returned += await eval(code);
      }
      embed.fields[1].value = `\`${returned}\``
      embed.author.name = `Success!`
      msg.react(config.successEmoji)
    } catch (e) {
      embed.fields[1].value = `\`${e}\``
      embed.author.name = `Error`
      embed.color = config.errorColor
      msg.react(config.errorEmoji)
    }
      msg.channel.send({ embed: embed })
  }

    run()
  }
}