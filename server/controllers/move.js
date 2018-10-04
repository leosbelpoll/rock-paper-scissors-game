// Models
const Move = require('../models/move')

// Settings
const config = require('../config')

function createMove(req, res){
    const move = req.body
    if(!move.move || !move.kills){
        return res.status(400).send({message: `Insert "move" and "kills"`})
    }else if(move.move === move.kills){
        return res.status(400).send({message: `Invalid "move" or "kills", they cannot be equals`})
    }else{
        Move.findOne({move: move.move, kills: move.kills}, (err, moveFound) => {
            if(err) return res.status(500).send({message: `DB error`})
            if(!moveFound) {
                // look for the opposit
                Move.findOne({move: move.kills, kills: move.move}, (err, moveFound) => {
                    if(err) return res.status(500).send({message: `DB error`})
                    if(moveFound){
                        return res.status(400).send({message: `Invalid move: "${move.kills}" already kills "${move.move}"`})
                    }else{
                        newMove = new Move({
                            move: move.move,
                            kills: move.kills
                        })
                        
                        newMove.save((err, move) => {
                            if (err) return res.status(500).send({message: `DB error`})
                            return res.status(200).send({move})
                        })
                    }
                })
            
            }else{
                return res.status(400).send({message: 'This move already exist'})
            }
        })
    }
}

function getMoves(req, res){
    Move.find((err, moves) => {
        if(err)
            return res.status(500).send({message: 'DB error'})
        return res.status(200).send({moves})
    })
}

function getWhichMoveWin(req, res){
    let move1 = req.query.move1
    let move2 = req.query.move2

    Move.findOne({move: move1, kills: move2}, (err, moveFound) => {
        if(err) res.status(500).send({message: 'DB error'})
        if(moveFound){
            return res.status(200).send({winner: "move1" })
        }else{
            Move.findOne({move: move2, kills: move1}, (err, moveFound) => {
                if(err) res.status(500).send({message: 'DB error'})
                if(moveFound){
                    return res.status(200).send({winner: "move2" })
                }else{
                    return res.status(200).send({winner: "tie" })
                }
            })
        }
    })
    
}

function deleteMove(req, res) {
    let id = req.params.id
    Move.remove({_id: id}, function(err) {
        if(err)
            return res.status(500).send({message: 'DB error'})
        return res.status(200).send({id})
    })
}

module.exports = {
    createMove,
    getMoves,
    deleteMove,
    getWhichMoveWin
}