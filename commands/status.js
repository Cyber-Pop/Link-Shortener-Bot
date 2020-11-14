module.exports = {
  name: 'status',
  ownerOnly: true,
  guildOnly: false,
  cooldown: 3,
  usage: '<name> <activity>',
 execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    const joined = args.join(' ')
    const split = joined.split('|')

    const presence = split[0].trim()
    const status = split[1].trim()
    console.log(`"${presence}" `)
    console.log(`"${status}" `)

    client.user.setPresence({activity: {name: presence}})
    client.user.setStatus(status)
    msg.channel.send(`Updated!`)
  }
}