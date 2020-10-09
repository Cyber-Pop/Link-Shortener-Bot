module.exports = {
  name: 'shorten',
  args: true,
  usage: '[link]',
  cooldown: 3,
  execute(msg, args, client, strings) {
    const axios = require('axios');
    let avatar = client.user.displayAvatarURL();

        let link = encodeURIComponent(args[0], msg)

        axios.get(`https://is.gd/create.php?format=simple&url=${link}`)
        .then(function (response) {
            // handle success
            let embed =  {
              color: strings.mainColor,
              title: `Link`,
              description: `[${response.data}](${response.data})`,
              author: {
		            name: `Success`,
		            icon_url: avatar
              }
            }

            msg.channel.send({embed : embed})
            msg.react(string.successEmoji)
        })
        .catch(function (error) {
          // handle error

          // Used to get error type and log it to the console while in development
          //console.log(error.response.data)

          if (error.response.data === strings.isgdInvalid) {
            let embed =  {
                color: strings.errorColor,
                title: `Invalid URL`,
                description: `Please try again with a valid URL`,
                author: {
		              name: `Error`,
		              icon_url: avatar
                }
            }

          msg.channel.send({embed : embed})

          } else if (error.response.data === strings.isgdBlacklisted) {
            let embed =  {
              color: strings.errorColor,
              title: `Blacklisted URL`,
              description: `This URL has been blacklisted. This can happen when it has been abused in the past or leads to URL shortner`,
              author: {
		            name: `Error`,
		            icon_url: avatar
              }
            }
            msg.react(strings.errorEmoji)
            msg.channel.send({embed : embed})
        }
      })
    }
  }
