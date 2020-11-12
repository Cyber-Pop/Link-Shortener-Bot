module.exports = {
  ownerOnly: true,
  name: 'eval',
  cooldown: 3,
  args: true,
  usage: '<code>',
 execute(msg, args, client, strings, prefix, axios) {
    console.log(`Executed eval by ${msg.author.username}`)
    let avatar = client.user.displayAvatarURL();
    let code = args.join(' ')
    let returned = ``
    let success;
    let embed = {
        footer: {
          "text": `Requested by ${msg.author.tag}`,
        },
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

  async function run() {
    try {
      let token = code.search('client.token')
      console.log(token)
      if (token !== -1) {
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