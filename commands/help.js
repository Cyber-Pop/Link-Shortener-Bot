module.exports = {
  name: 'help',
  description: 'I think this one is self explanatory',
  ownerOnly: false,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
  category: "fun",
  execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    const { commands } = msg.client;

    if (!args.length) {
      const embed = new Discord.MessageEmbed()
      .setColor(config.mainColor)
      let owner = [`ignore`]
      let moderation = [`ignore`]
      let fun = [`ignore`]
      let utility = [`ignore`]
      let miscellaneous = [`ignore`]
      const filter = (command) => {
        if (!command.category) {
          miscellaneous.push(command.name)
        } 
        
        if (command.ownerOnly) {
          owner.push(command.name)
        }

        if (command.category === `moderation`) {
          moderation.push(command.name)
        }

        if (command.category === `fun`) {
          fun.push(command.name)
        }

        if (command.category === `utility`) {
          utility.push(command.name)
        }
      }

      const commandList = commands.map(command => command.name).join('\n')
      const list = commands.map(filter)
      
      if (msg.author.id === config.ownerID) {
        embed.addField(`Owner`, owner.join(","))
      }
      embed.addField(`Moderation`, moderation.join(","))
      embed.addField(`Fun`, fun.join(","))
      embed.addField(`Utility`, utility.join(","))
      

      embed.setTitle('Commands')
      msg.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor(config.mainColor)
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
        msg.channel.send(embed)
      }
      // End of embeded if statement
    }
  }
}