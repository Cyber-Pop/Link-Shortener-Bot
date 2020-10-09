module.exports = {
  name: 'ping',
  args: false,
  cooldown: 3,
  execute(msg, args, client, strings) {
    async function ping() {
      const m = await msg.channel.send("Ping?");

      m.edit(`Pong!\n**Latency:** ${m.createdTimestamp - msg.createdTimestamp}ms\n**API Latency:** ${Math.round(client.ws.ping)}ms`);
    }

    ping()
  }
}