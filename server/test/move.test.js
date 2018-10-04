let app = require('../app')
let chai = require('chai')
let request = require('supertest')

let expect = chai.expect

let Move = require('../models/move');
let objectsTest = require('./objectTest')
let idCreatedMove;

before(function (done) {
    Move.remove({}, (err) => { 
        done();           
    });   
})

describe('Moves API Integration Test', function(){

    describe('GET / moves', function(){

        it('should get 200 code', function(done){
            request(app).get('/moves')
                .end(function(err, res){
                    expect(res.statusCode).to.equal(200)
                    done()
                })
        })

        it('should be an object {moves: [...]}', function(done){
            request(app).get('/moves')
                .end(function(err, res){
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('moves')
                    done()
                })
        })

    })

    describe('POST / moves', function(){

        it('should get a 200 code and an object {move: {...}}', function(done){
            request(app).post('/moves').send(objectsTest.goodMove)
                .end(function(err, res){

                    idCreatedMove = res.body.move._id
                    
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('move')
                    done()
                })
        })

        it('should get a 400 (already exist) and an object {message: ...}', function(done){
            request(app).post('/moves').send(objectsTest.goodMove)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(400)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    done()
                })
        })

        it('should get a 400 (reverse) and an object {message: ...}', function(done){
            request(app).post('/moves').send(objectsTest.badMoveReverse)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(400)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    done()
                })
        })

        it('should get a 400 (empty) code with and object {message: ...}', function(done){
            request(app).post('/moves').send(objectsTest.badMoveEmpty)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(400)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    done()
                })
        })

        it('should get a 400 (empty kills) code with and object {message: ...}', function(done){
            request(app).post('/moves').send(objectsTest.badMoveJustMove)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(400)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    done()
                })
        })

        it('should get a 400 (empty move) code with and object {message: ...}', function(done){
            request(app).post('/moves').send(objectsTest.badMoveJustKills)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(400)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    done()
                })
        })

        it('should get a 400 (equals) code with and object {message: ...}', function(done){
            request(app).post('/moves').send(objectsTest.badMoveEquals)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(400)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('message')
                    done()
                })
        })

    })

    describe('DELETE /moves/:id', function(){
        
        it('should get 200 code', function(done){
            request(app).delete(`/moves/${idCreatedMove}`)
                .end(function(err, res){
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.be.an('object')
                    expect(res.body).to.have.property('id')
                    done()
                })
        })

    })
    
})