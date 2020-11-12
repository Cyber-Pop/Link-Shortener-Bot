module.exports = {
  name: '8ball',
  args: false,
  cooldown: 3,
  execute(msg, args, client, strings, prefix, axios) {
    let items = ['Yes','No', 'For certain', 'As I see it, yes', 'Ask again later', 'Concentrate and ask again', 'You have been blacklisted', 'Cannot predict now', 'Better not tell you know', 'Don\'t count on it', 'It is certain', 'It is decidedly so', 'Most likely','You have been granted administrator perms', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Outlook good', 'Signs point to yes', 'Without a doubt', 'You may rely on it']

    let randomNum = Math.round(Math.random() * items.length)
    msg.channel.send(`🎱 ${items[randomNum]}`)
  }
}