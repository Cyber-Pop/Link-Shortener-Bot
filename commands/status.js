module.exports = {
  name: 'status',
  ownerOnly: true,
  args: true,
  cooldown: 3,
  guildOnly: false,
  execute(msg, args, client, strings) {
    const joined = args.join('')
    const split = joined.trim().split('|')
    // NOT DONE NEED TO CHECK IF ARGUMENTS REQUIRE FOR VAR
    const name = split[0]
    console.log(split)

    let status = { activity: { name: `${name}`, type: `LISTENING` }, status: `online` };

    client.user.setPresence(status)
    .then(console.log(`Set status`))
    .catch(console.error);
  }
}