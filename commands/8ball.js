module.exports = {
  name: '8ball',
  args: false,
  usage: '<question>',
  cooldown: 3,
  execute(msg, args, client, config, prefix, axios, Discord) {
    let items = ['Yes','No', 'For certain', 'As I see it, yes', 'Ask again later', 'Concentrate and ask again', 'You have been blacklisted', 'Cannot predict now', 'Better not tell you know', 'Don\'t count on it', 'It is certain', 'It is decidedly so', 'Most likely','You have been granted administrator perms', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Outlook good', 'Signs point to yes', 'Without a doubt', 'You may rely on it']
    const min = 0
    const max = items.length - 1
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  msg.channel.send(`🎱 ${items[randomNum - 1]}`)
  }
}