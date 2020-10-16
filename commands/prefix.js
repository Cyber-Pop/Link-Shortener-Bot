module.exports = {
  name: 'prefix',
  args: false,
  cooldown: 3,
  execute(msg, args, client, strings, prefixes) {
    async function setPrefix() {
      console.log(args)
      await prefixes.set(msg.guild.id, args[0])
    }

    setPrefix()
  }
}