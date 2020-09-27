module.exports = {
  name: 'ping',
  args: false,
  cooldown: 3,
  guildOnly: false,
  execute(msg, args, client, strings) {
    async function ping() {
      const m = await msg.channel.send("Ping?");

      m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API latency is ${Math.round(client.ws.ping)}ms`);
    }

    ping()
  }
}