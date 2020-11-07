module.exports = {
  ownerOnly: true,
  name: 'eval',
  cooldown: 3,
  args: true,
  usage: '<code>',
 execute(msg, args, client, strings, guildPrefix) {
    console.log(`Executed eval by ${msg.author.username}`)
    let avatar = client.user.displayAvatarURL();
    let code = args.join(' ')
    let returned = ``
    let success;
    let embed = {
        color: strings.mainColor,
        fields: [
          {
            "name": "Original Code",
            "value":`\`${code}\``
          },
          {
            "name": "Result",
            "value": ""
          }
        ],
        author: {
          name: ``,
          icon_url: avatar
        }
      }

      console.log(embed.fields[1].value)

    if (strings.devMode) {
        console.log(code)
    }

  async function run() {
    try {
      if (code === `client.token`) {
        returned += `Nice Try`
      } else {
        returned += await eval(code);
      }
      embed.fields[1].value = `\`${returned}\``
      embed.author.name = strings.evalSuccess
      msg.react(strings.successEmoji)
    } catch (e) {
      embed.fields[1].value = `\`${e}\``
      embed.author.name = strings.evalSuccess
      embed.color = strings.errorColor
      msg.react(strings.errorEmoji)
    }
      msg.channel.send({ embed: embed })
  }

    run()
  }
}