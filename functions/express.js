module.exports = {
  startExpress() {
    const express = require('express')
    const chalk = require('chalk')
    const config = require('./config.json');
    const app = express()
    const port = config.port

    app.get('/', (req, res) => {
      res.send(`Hello`)
    })

    app.listen(port, () => {
      console.log(chalk.inverse(`INFO`), `Express Server Running`)
    })
  }
}