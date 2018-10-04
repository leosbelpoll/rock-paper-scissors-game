// Modules
const express = require('express')

// Controllers
const playerController = require('../controllers/player')

const playerRouter = express.Router()

playerRouter.post('/', playerController.createPlayer)

// increment 1 totalWon to the player
playerRouter.put('/', playerController.addWinner)

// player list order by winsTotal desc
playerRouter.get('/statistics', playerController.getStatistics)

// player order by winsTotoal desc limit 1
playerRouter.get('/emperor', playerController.getEmperor)

module.exports = playerRouter