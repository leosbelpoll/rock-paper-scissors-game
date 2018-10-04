// Modules
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PlayerSchema = new Schema({
    name: String,
    totalWon: Number
})

module.exports = mongoose.model('Player', PlayerSchema)