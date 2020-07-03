const express = require('express')
const db = require('./models')
const serviceInstructor = require('./services/instructor')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json()) 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    
    return next()
}) 

const config = {
    force: true // true> create new table any time
}

db.sequelize.sync(config).then(() => {
    serviceInstructor(app,db)
    app.listen(8080, () => console.log("Server Start"))
})
  