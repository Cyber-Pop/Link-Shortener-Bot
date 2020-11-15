const { ShardingManager } = require('discord.js');
const token = process.env.BOT_TOKEN
const manager = new ShardingManager('./bot.js', { token: token});
const chalk = require('chalk')

manager.on('shardCreate', shard => {
  console.log(chalk.bgGreenBright(`SHARD`) ,`Launched shard ${shard.id}`);
  
  shard.on('death', shard => {
    console.log(chalk.bgRedBright(`SHARD`), `Shard died`)
  })
  shard.on('disconnect', shard => {
    console.log(chalk.bgRedBright(`SHARD`), `Shard ${shard.id} disconnected`)
  })
  shard.on('reconnecting', shard => {
    console.log(chalk.bgRedBright(`SHARD`), `Shard ${shard.id} reconnecting`)
  })

});

manager.spawn();