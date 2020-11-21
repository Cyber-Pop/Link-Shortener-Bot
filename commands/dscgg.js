module.exports = {
  name: 'dscgg',
  description: 'Gets info on a [dsc.gg](https://dsc.gg) link.',
  ownerOnly: false,
  guildOnly: false,
  args: true,
  cooldown: 3,
  usage: '<part after the links slash>',
  execute(msg, args, client, config, prefix, axios, Discord, avatar) {
    // Code for API V2

    /* axios.get(`https://dsc.gg/api/v2/link/${args[0]}`)
    .then(function (response) {
      let embed = new Discord.MessageEmbed()
      .setColor(config.mainColor)
      .setAuthor(`Info for link ${response._id}`, avatar)
      .addField(`Owner:`, `emphty for now`)
      .addField(`Owner ID:`, `${response.owner}`)
      .addField(`Type:`, `${response.type}`)
      .addField(`Leads To:`, ` \`${response.redirect}\` `)
    })
    .catch(function (error) {
      console.log(error)
    }) */

  }
}