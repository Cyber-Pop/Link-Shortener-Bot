module.exports = {
  name: 'eval',
  ownerOnly: true,
  guildOnly: false,
  args: true,
  cooldown: 3,
  usage: '<code>',
 execute(msg, args, client, config, prefix, axios, Discord) {
    const util = require('util');
    let avatar = client.user.displayAvatarURL();
    let code = args.join(' ');
    let returned = ``;
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
        let rawReturned = await eval(code);
        if (typeof rawReturned !== "string") {
          returned += util.inspect(rawReturned)
        } else {
            returned += rawReturned
        }
      }
      embed.fields[1].value = `\`${returned}\``
      embed.author.name = `Success!`
      msg.react(config.successEmoji)
    } catch (e) {
      let returned;
       if (typeof e !== "string") {
          returned += util.inspect(e)
        } else {
            returned += e
        }

      embed.fields[1].value = ` \`${returned}\` `
      embed.author.name = `Error`
      embed.color = config.errorColor
      msg.react(config.errorEmoji)
    }
      msg.channel.send({ embed: embed })
  }

    run()
  }
}