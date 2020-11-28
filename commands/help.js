module.exports = {
  name: 'help',
  description: 'I think this one is self explanatory',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
  execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    const embed = new Discord.MessageEmbed()
    .setColor(config.mainColor)
    const { commands } = msg.client;

    if (!args.length) {
      const commandList = commands.map(command => command.name).join('\n')

      embed.setTitle('Commands')
      embed.setDescription(`**List of available commands:**\n${commandList}`)
    } else {
      // This comment is to make sure you know this is a embeded if statement
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
        }
        embed.setTitle(command.name)
        embed.addField(`Description`, description)
        embed.addField(`Cooldown`, cooldown)
        embed.addField(`Usage`, usage)
      }
      // End of embeded if statement
    }

    msg.channel.send(embed)
  }
}