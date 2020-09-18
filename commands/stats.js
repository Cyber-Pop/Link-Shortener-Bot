module.exports = {
  name: 'stats',
  args: false,
  usage: '',
  execute(msg, args, client) {
    let avatar = client.user.displayAvatarURL();
    const dependencies = require('../package.json');
    const sysInfo = require('systeminformation')
    let discordjsVersionRaw = dependencies["dependencies"]["discord.js"];
    let axiosVersionRaw = dependencies.dependencies.axios;
    let expressVersionRaw = dependencies.dependencies.express;
    let sysInfoVersionRaw = dependencies.dependencies.systeminformation;
    // Slices the previous variable to get rid of the
    let discordjsVersion = `v` + discordjsVersionRaw.slice(1);
    let axiosVersion = `v` + axiosVersionRaw.slice(1);
    let expressVersion = `v`+ expressVersionRaw.slice(1);
    let sysInfoVersion = `v` + sysInfoVersionRaw.slice(1);
    let totalMemory;
    let usingMemory;

    async function memory() {
      let response;

      await sysInfo.mem()
      .then(data => response = data)
      .catch(error => console.error(error));

      totalMemory = Math.floor(response.total / 1000000)
      usingMemory = Math.floor(response.active / 1000000)

      let embed =  {
        color: 0x9900ff,
        fields: [
          {
            name: `Bot Stats`,
            value: `Servers: **${client.guilds.cache.size}**
                    Channels: **${client.channels.cache.size}**
                    Users: **${client.users.cache.size}**`
          },
          {
            name: `Utilities`,
            value: `Nodejs: **${process.version}**
                    Discord.js: **${discordjsVersion}**
                    Axios: **${axiosVersion}**
                    Express: **${expressVersion}**
                    System Information: **${sysInfoVersion}**`
          },
          {
            name: `System`,
            value: `Memory: **Using ${usingMemory}MB out of ${totalMemory}MB**`
          }
        ],
        author: {
		    name: `Stats`,
		    icon_url: avatar
      }
    }

    msg.channel.send({embed : embed})
    }

    memory()

    
  }
}