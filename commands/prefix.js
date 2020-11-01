module.exports = {
  name: 'prefix',
  args: false,
  cooldown: 3,
  execute(msg, args, client, strings, prefixes) {
    async function setPrefix() {
      console.log(args)
      /* if (!msg.author.permissions.has('ADMINISTRATOR')) return msg.channel.send(`You need to be an administrator to change the prefix`) */
      await prefixes.set(msg.guild.id, args[0])
      msg.channel.send(`The prefix has been updated to \`${args[0]}\` `)
    }

    setPrefix()
  }
}