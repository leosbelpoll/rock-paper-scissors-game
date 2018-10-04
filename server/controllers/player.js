// Models
const Player = require('../models/player');

// Settings
const config = require('../config')

function createPlayer(req, res){
    const player = req.body    
    
    if(!player.name){
        return res.status(400).send({message: `Name cannot be empty`})
    }

    Player.findOne({name: player.name}, (err, playerFound) => {
        if(err) return res.status(500).send({message: `DB error`})
        if(!playerFound) {
            newPlayer = new Player({
                name: player.name,
                totalWon: 0
            });
            newPlayer.save((err, player) => {
                if (err) return res.status(500).send({message: `DB error`})
                return res.status(200).send({player})
            })
        }else{
            return res.status(200).send({player: playerFound})
        }
    })
}


function addWinner(req, res){
    const player = req.body

    Player.findOne({name: player.name}, (err, playerFound) => {
        if(err) return res.status(500).send({message: `DB error`})
        if(playerFound) {
            playerFound.totalWon++
            playerFound.save((err, player) => {
                if (err) return res.status(500).send({message: `DB error`})
                return res.status(200).send({player})
            })
        }else{
            return res.status(500).send({message: `DB error`})
        }
    })
}

function getStatistics(req, res){
    Player.find()
    .sort({'totalWon': -1})
    .limit(config.statisticsLimit)
    .exec((err, players) => {
        if(err)
            return res.status(500).send({message: 'DB error'})
        if(!players.length)
            return res.status(404).send({message: 'There is not any winner yet'})
        return res.status(200).send({players})
    })
    
}

function getEmperor(req, res){
    Player.find()
    .sort({'totalWon': -1})
    .limit(2)
    .exec((err, players) => {
        if(err)
            return res.status(500).send({message: 'DB error'})
        if(!players.length)
            return res.status(404).send({message: 'There is not any winner yet'})
        if(players.length === 1)
            return res.status(200).send({player: players[0]})
        if(players.length === 2){
            if(players[0].totalWon > players[1].totalWon)
                return res.status(200).send({player: players[0]})
            else // if there is a tie
                return res.status(200).send({player: {_id: null}})
        }
    })
    
}

module.exports = {
    createPlayer,
    addWinner,
    getStatistics,
    getEmperor
}