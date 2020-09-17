module.exports = {
  name: 'ping',
  args: false,
  execute(msg, args, client) {
    msg.channel.send(`Ping!`)
  }
}