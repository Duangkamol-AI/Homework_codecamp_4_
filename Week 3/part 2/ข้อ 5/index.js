const express = require('express')
const db = require('./models')
const app = express()

const config = {
    force: true // true> create new table any time
}

db.sequelize.sync(config).then(() => {
    app.listen(8080, () => console.log("Server Start"))
})