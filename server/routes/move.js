// Modules
const express = require('express')

// Controllers
const moveController = require('../controllers/move')

const moveRouter = express.Router()

moveRouter.get('/', moveController.getMoves)
moveRouter.get('/which-win', moveController.getWhichMoveWin)
moveRouter.post('/', moveController.createMove)
moveRouter.delete('/:id', moveController.deleteMove)

module.exports = moveRouter