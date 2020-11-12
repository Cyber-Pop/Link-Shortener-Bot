module.exports = {
  name: 'status',
  ownerOnly: true,
  cooldown: 3,
  usage: '<name> <activity>',
  execute(msg, args, client, strings, prefix, axios) {
    const joined = args.join('')
    const split = joined.trim().split('|')
    // NOT DONE NEED TO CHECK IF ARGUMENTS REQUIRE FOR VARIABLES ARE EMPHTY
    let name = (split[0]) ? split[0] : `${strings.prefix}help`;
    let activity = (split[1]) ? split[1].toUpperCase() : `LISTENING`;
    let status = (split[2]) ? split[2].toUpperCase() : `ONLINE`;

    console.log(split)
    console.log(`${activity} is ${activity.length} characters long!`)

    if (activity === `PLAYING`) {
      activity = `PLAYING`
    } else if (activity === `STREAMING`) {
      activity = `STREAMING`
    } else if (activity === `WATCHING`) {
      activity = `WATCHING`
    } else {
      activity = `LISTENING`
    }

    console.log(status)

    if (status === `ONLINE`) {
      status = `online`
    } else if (status === `IDLE`) {
      status = `idle`
    } else if (status === `DND`) {
      status = `dnd`
      console.log(`dnd?`)
    } else {
      status = `ONLINE`
    }

    console.log(status)

    let final = { activity: { name: `${name}`, type: `${activity}` }, status: `${status}` };

    client.user.setPresence(final)
    .then(msg.channel.send(`Updated Status`))
    .catch(console.error);
  }
}