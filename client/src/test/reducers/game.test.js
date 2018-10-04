import assert from 'assert'

import { START_GAME, START_ROUND, FINISH_ROUND, FINISH_GAME, FETCH_STATISTICS, FETCH_EMPEROR, ERROR, RESTART_GAME, REMATCH_GAME } from '../../actions/types'
import game from '../../reducers/gameReducer'

describe('Game Reducer', () => {

    it('START_GAME', () => {

        const state = {
            player1: {},
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: START_GAME,
            payload: {
                player1: {
                    _id: '1',
                    name: 'test1'
                },        
                player2: {
                    _id: '2',
                    name: 'test2'
                }
            }
        }
        
        const expected = {
            player1: {
                _id: '1',
                name: 'test1'
            },
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('RESTART_GAME', () => {

        const state = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: RESTART_GAME,
            payload: {}
        }
        
        const expected = {
            player1: {},
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('REMATCH_GAME', () => {

        const state = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: 'test',
            currentPlayer: 2,
            roundsWon: ['test1', 'test2'],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: REMATCH_GAME,
            payload: {
                player1: {
                    _id: '1',
                    name: 'test1'
                },        
                player2: {
                    _id: '2',
                    name: 'test2'
                }
            }
        }
        
        const expected = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('START_ROUND', () => {

        const state = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: START_ROUND,
            payload: 'moveTest'
        }
        
        const expected = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: 'moveTest',
            currentPlayer: 2,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('FINISH_ROUND', () => {

        const state = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: 'move2',
            currentPlayer: 2,
            roundsWon: ['move1', 'move2'],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: FINISH_ROUND,
            payload: 'move2'
        }
        
        const expected = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: '',
            currentPlayer: 1,
            roundsWon: ['move1', 'move2', 'move2'],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('FINISH_GAME', () => {

        const state = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: FINISH_GAME,
            payload: {
                _id: '2',
                name: 'test2'
            }
        }
        
        const expected = {
            player1: {
                _id: '1',
                name: 'test1'
            },        
            player2: {
                _id: '2',
                name: 'test2'
            },
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {
                _id: '2',
                name: 'test2'
            },
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('FETCH_STATISTICS', () => {

        const state = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: FETCH_STATISTICS,
            payload: [
                {
                    _id: 2,
                    name: 'test2',
                    totalWon: 5
                },
                {
                    _id: 1,
                    name: 'test1',
                    totalWon: 2
                }
            ]
        }
        
        const expected = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [
                {
                    _id: 2,
                    name: 'test2',
                    totalWon: 5
                },
                {
                    _id: 1,
                    name: 'test1',
                    totalWon: 2
                }
            ],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('FETCH_EMPEROR', () => {

        const state = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: FETCH_EMPEROR,
            payload: {
                _id: 2,
                name: 'test2',
                totalWon: 5
            }
        }
        
        const expected = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {
                _id: 2,
                name: 'test2',
                totalWon: 5
            }
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('ERROR', () => {

        const state = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: ERROR,
            payload: {
                message: 'Error message'
            }
        }
        
        const expected = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {
                message: 'Error message'
            },
            statistics: [],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

    it('DEFALUT', () => {

        const state = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }
        
        const action = {
            type: 'DEFALUT',
            payload: {}
        }
        
        const expected = {
            player1: {},        
            player2: {},
            move: '',
            currentPlayer: 1,
            roundsWon: [],
            error: {},
            statistics: [],
            winner: {},
            emperor: {}
        }

        assert.deepEqual(game(state, action), expected)
    })

})