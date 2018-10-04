let app = require('../app')
let chai = require('chai')
let request = require('supertest')

let expect = chai.expect

let Player = require('../models/move');
let objectsTest = require('./objectTest')

before(function (done) {
    Player.remove({}, (err) => { 
        done();           
    });   
})

describe('Players API Integration Test', function(){

    describe('GET / players', function(){

        it('should get 200 code with statistics', function(done){
            request(app).get('/players/statistics')
                .end(function(err, res){
                    expect(res.statusCode).to.equal(200)
                    done()
                })
        })

        it('should be an object {players: [...] with an array inside}', function(done){
            request(app).get('/players/statistics')
                .end(function(err, res){
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('players')
                    expect(res.body.players).to.be.an('array')
                    done()
                })
        })

        it('should be an object {player: {...} with the key _id}', function(done){
            request(app).get('/players/emperor')
                .end(function(err, res){
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('player')
                    done()
                })
        })

    })

    describe('POST / players', function(){

        it('should get a 200 code and an object {player: {...}}', function(done){
            request(app).post('/players').send(objectsTest.goodPlayer)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('player')
                    done()
                })
        })

        it('should get a 400 (empty) code with and object {message: ...}', function(done){
            request(app).post('/players').send(objectsTest.badPlayerEmpty)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(400)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    done()
                })
        })

    })

    describe('PUT / players', function(){

        it('should get a 200 code and an object {player: {...}}', function(done){
            request(app).put('/players').send(objectsTest.goodPlayer)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('player')
                    done()
                })
        })

    })

})