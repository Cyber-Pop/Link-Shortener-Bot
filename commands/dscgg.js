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

    /***********************************************************************************/

    // V1 CODE

    axios.get(`https://dsc.gg/api/link/${args[0]}`)
    .then(function (response) {
      // Here we split the type of link provided into an array
      let typeRaw = response.data.type.split("")
      // Then we take the first letter and make it uppercasethen save it
      typeRaw[0] = typeRaw[0].toUpperCase()
      // Then we turn it back into one string again
      let type = typeRaw.join("")

      let embed = new Discord.MessageEmbed()
      .setColor(config.mainColor)
      .setAuthor(`Link Info ${args[0]}`, avatar)
      .addField(`Owner:`, `**Name:** NOT DONE\n**ID:** ${response.data.owner}`)
      .addField(`Type:`, `${type}`)
      .addField(`Clicks:`, `**Unique Clicks:** ${response.data.unique}\n**Total Clicks:** ${response.data.clicks}`)
      .addField(`Leads To:`, `||${response.data.redirect}||`)
      .addField(`Recent Click:`, `${response.data.recent}`)

      msg.channel.send(embed)
      //console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}