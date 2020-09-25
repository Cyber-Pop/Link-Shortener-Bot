module.exports = {
  name: 'stats',
  args: false,
  cooldown: 3,
  guildOnly: false,
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
    let os;
    let cpuLoad;
    let totalMemory;
    let usingMemory;

    async function memory() {
      let osResponse;
      let cpuResponse
      let memResponse;
      let percenteage;

      await sysInfo.mem()
      .then(data => memResponse = data)
      .catch(error => console.error(error));

      usingMemory = Math.round(memResponse.active / 1000000)
      totalMemory = Math.round(memResponse.total / 1000000)
      percentage = Math.round(usingMemory/totalMemory * 100)

      await sysInfo.osInfo()
      .then(data => osResponse = data)
      .catch(error => console.log(error))

      await sysInfo.currentLoad()
      .then(data => cpuResponse = data)
      .catch(error => console.log(error))

      cpuLoad = Math.round(cpuResponse.currentload)

      os = osResponse.distro

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
            value: `OS: **${os}**
                    CPU: **${cpuLoad}%**
                    Memory: **${percentage}% (${usingMemory}MB/${totalMemory}MB)**`
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