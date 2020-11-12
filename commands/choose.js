module.exports = {
  name: 'choose',
  args: true,
  cooldown: 3,
  execute(msg, args, client, strings, prefix, axios) {
    const joined = args.join('')
    const split = joined.split('|')
    const min = 0
    const max = split.length - 1
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    msg.channel.send(`I choose ${split[randomNum]}`)
  }
}