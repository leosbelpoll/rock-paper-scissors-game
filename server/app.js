// Modules
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Settings
const config = require('./config')

// Routes
const player = require('./routes/player')
const move = require('./routes/move')

const app = express()

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', config.may_request_address);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/players', player)
app.use('/moves', move)

mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
    if(err){
        console.log('Error connecting to MongoDb')
        return
    }else{
        console.log('Mongoose is running')
        
        app.listen(config.port, () => {
            console.log(`Server is running at http://localhost:${config.port}`)
        })
    }
})

module.exports = app