module.exports = {
  name: 'status',
  ownerOnly: true,
  cooldown: 3,
  guildOnly: false,
  execute(msg, args, client, strings) {
    const joined = args.join('')
    const split = joined.trim().split('|')
    // NOT DONE NEED TO CHECK IF ARGUMENTS REQUIRE FOR VARIABLES ARE EMPHTY
    let name = (split[0].length) ? split[0] : `${strings.prefix}help`;
    let activity;
    let status
    console.log(split)

    let final = { activity: { name: `${name}`, type: `LISTENING` }, status: `online` };

    client.user.setPresence(final)
    .then(console.log(`Set status`))
    .catch(console.error);
  }
}