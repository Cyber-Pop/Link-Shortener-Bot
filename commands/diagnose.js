module.exports = {
  name: 'diagnose',
  args: false,
  cooldown: 3,
  guildOnly: true,
  execute(msg, args, client) {
    async function command() {
      let role = msg.guild.roles.cache.find(role => console.log(role.name));
    }

    command()
  }
}