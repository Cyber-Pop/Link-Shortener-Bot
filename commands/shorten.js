module.exports = {
  name: 'shorten',
  execute(msg, args, client) {
    const axios = require('axios');

    if (!args.length) {
    let avatar = client.user.displayAvatarURL();
    let embed =  {
        color: 0xff0000,
        title: `No Link Provided`,
        description: `You didn't provide a link ${msg.author}`,
        author: {
		    name: `Error`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
    } else {
        let link = encodeURIComponent(args[0], msg)

        axios.get(`https://is.gd/create.php?format=simple&url=${link}`)
        .then(function (response) {
            // handle success
            let avatar = client.user.displayAvatarURL();
            let embed =  {
              color: 0x00ff00,
              title: `Link`,
              description: `[${response.data}](${response.data})`,
              author: {
		            name: `Success`,
		            icon_url: avatar
              }
            }

            msg.channel.send({embed : embed})
        })
        .catch(function (error) {
          // handle error

          // Used to get error type and log it to the console while in development
          //console.log(error.response.data)

          if (error.response.data === `Error: Please enter a valid URL to shorten`) {
            let avatar = client.user.displayAvatarURL();
            let embed =  {
                color: 0xff0000,
                title: `Invalid URL`,
                description: `Please try again with a valid URL`,
                author: {
		              name: `Error`,
		              icon_url: avatar
                }
            }

          msg.channel.send({embed : embed})

          } else if (error.response.data === `Error: Sorry, the URL you entered is on our internal blacklist. It may have been used abusively in the past, or it may link to another URL redirection service.`) {
            let avatar = client.user.displayAvatarURL();
            let embed =  {
              color: 0xff0000,
              title: `Blacklisted URL`,
              description: `This URL has been blacklisted. This can happen when it has been abused in the past or leads to URL shortner`,
              author: {
		            name: `Error`,
		            icon_url: avatar
              }
            }

            msg.channel.send({embed : embed})
        }
      })
    }
  }
}