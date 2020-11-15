const { ShardingManager } = require('discord.js');
const token = process.env.BOT_TOKEN
const manager = new ShardingManager('./bot.js', { token: token});
const chalk = require('chalk')

manager.on('shardCreate', shard => console.log(chalk.bgGreenBright(`SHARD`) ,`Launched shard ${shard.id}`));
manager.spawn();