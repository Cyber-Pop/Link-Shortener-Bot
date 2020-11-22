module.exports = {
  name: 'error',
  description: 'Shows the bots latency',
  ownerOnly: true,
  guildOnly: false,
  args: true,
  cooldown: 3,
  usage: '',
  execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    const fs = require('fs')
    async function run() {
      let m = await msg.channel.send(`<a:LOADING:779821648463265813> Loading`)
      let error = fs.readFile(`./errors/${args[0]}`, function (data, err) {
        let embed = new Discord.MessageEmbed()
          .setColor(config.mainColor)
          .setAuthor(`Error`)
          .setDescription(data)
        m.edit(embed)
      })
    }

    run()
  }
}