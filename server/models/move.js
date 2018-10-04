// Modules
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MoveSchema = new Schema({
    move: String,
    kills: String
})

module.exports = mongoose.model('Move', MoveSchema)