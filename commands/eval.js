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
      eval(code)
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