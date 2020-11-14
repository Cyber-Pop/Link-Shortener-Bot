module.exports = {
  name: 'ping',
  ownerOnly: true,
  guildOnly: false,
  args: false,
  cooldown: 3,
  usage: '',
 execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    async function ping() {
      const m = await msg.channel.send("Ping?");

      m.edit(`Pong!\n**Latency:** ${m.createdTimestamp - msg.createdTimestamp}ms\n**API Latency:** ${Math.round(client.ws.ping)}ms`);
    }

    ping()
  }
}