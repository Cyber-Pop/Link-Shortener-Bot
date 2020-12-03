module.exports = {
  check(msg, blacklist) {
    async function run() {
      let user = await blacklist.get(msg.author.id)
      let blacklisted
      if (user) {
        msg.channel.send(`Sorry but you have been blacklisted`);
         blacklisted = await true;
      }

    }
    
    if (blacklisted) {
      console.log(`blacklisted`)
    } else {
      console.log(`not blacklist`)
    }

  }
}