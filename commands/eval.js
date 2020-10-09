module.exports = {
  ownerOnly: true,
  name: 'eval',
  cooldown: 3,
  args: false,
  execute(msg, args, client, strings) {
    console.log(`Executed eval by ${msg.author.username}`)
    let avatar = client.user.displayAvatarURL();

    try {
      const code = args.join(' ')
      if (strings.devMode) {
        console.log(code)
      }

      async function run() {
        let returned = ``
        returned += await eval(code);
        let embed = {
          color: strings.mainColor,
          description: `This is what the code returned:\n${returned}`,
          author: {
            name: `Executed`,
            icon_url: avatar
          }
        }

        msg.channel.send({embed: embed})
      }
      run()
      msg.react('✅')
    } catch (e) {
      let embed = {
        color: strings.errorColor,
        description: `There was an error while running the code. The error has been included below\n \`\`\`${e}\`\`\`\   `,
        author: {
          name: `Error`,
          icon_url: avatar
        }
      }

      msg.channel.send({ embed: embed })
    }
  }
}