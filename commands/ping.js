module.exports = {
  name: 'ping',
  args: false,
  usage: '',
  execute(msg, args, client) {
    msg.channel.send(`Pong!`)
  }
}