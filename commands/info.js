module.exports = {
  name: 'info',
  args: false,
  cooldown: 3,
  execute(msg, args, client, config, prefix, axios, Discord) {
    let avatar = client.user.displayAvatarURL();
    let embed =  {
        color: config.mainColor,
        title: `About Me`,
        description: `I started off as a side project meant to put my owners skills to the test in combining various things that I learned throughout my coding journer. I'm the first bot that my owner made to actually be published. This means that support will probably be nonexistent and downtime might happen more often than expected`,
        fields: [
          {
		    	  name: 'Code',
			      value: 'The code of the bot is open source. This mean you can host it yourself it. Click [here](https://github.com/TheLimifiedLime/Link-Shortner-Bot) to see the code.',
		      }
        ],
        author: {
		    name: `Info`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
  }
}