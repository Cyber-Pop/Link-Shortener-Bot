module.exports = {
  name: 'help',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
  execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    let oldEmbed = {
      color: config.mainColor,
      title: `Commands`,
      description: `List of available commands:\n\n**${prefix}help:** You're viewing it right now\n**${prefix}info:** Shows info about the bot\n**${prefix}stats:** Show simple statistics about the bot\n**${prefix}changelog:** Shows most recent changes\n**${prefix}ping:** Replies back with Pong!\n**${prefix}shorten [url]:** Shortens a link\n**${prefix}vgd [url]:** Shortens a link using v.gd`,
      author: {
        name: `Help`,
        icon_url: avatar
      }
    }

    const embed = new Discord.MessageEmbed()
    .setColor(config.mainColor)
    const { commands } = msg.client;

    if (!args.length) {
      const commandList = commands.map(command => command.name).join('\n')

      embed.setTitle('Commands')
      embed.setDescription(`**List of available commands:**\n${commandList}`)
    } else {
      const command = commands.get(args[0])
      if (!command) {
        msg.channel.send(`${args[0]} is a not a valid command`)
      } else {
        let description = command.description;
        let cooldown = command.cooldown;
        let usage = `${prefix}${command.name} ${command.usage}`;
        if (!command.description) {
          description = `There is no description available for this command`
        }
        if (!command.cooldown) {
          cooldown = `${config.defaultCooldown}`
          console.log(`no cooldown`)
        }
        console.log(command)
        embed.setTitle(command.name)
        embed.addField(`Description`, description)
        embed.addField(`Cooldown`, cooldown)
        embed.addField(`Usage`, usage)
      }
    }

    msg.channel.send(embed)
  }
}