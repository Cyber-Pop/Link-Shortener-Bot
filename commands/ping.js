module.exports = {
  name: 'ping',
  execute(msg, args, client) {
    msg.channel.send(`Ping!`)
  }
}