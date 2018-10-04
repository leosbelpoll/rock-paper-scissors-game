import assert from 'assert'

import { FETCH_MOVES, CREATE_MOVE, REMOVE_MOVE, ERROR } from '../../actions/types'
import configuration from '../../reducers/configurationReducer'

describe('Configuration Reducer', () => {

    it('CREATE_MOVE', () => {

        const state = {
            moves: [],
            error: {}
        }
        
        const action = {
            type: CREATE_MOVE,
            payload: {
                move: 'moveTest',
                kills: 'killsTest'
            }
        }
        
        const expected = {
            moves: [
                {
                    move: 'moveTest',
                    kills: 'killsTest'
                }
            ],
            error: {}
        }

        assert.deepEqual(configuration(state, action), expected)
    })

    it('FETCH_MOVES', () => {

        const state = {
            moves: [],
            error: {}
        }
        
        const action = {
            type: FETCH_MOVES,
            payload: [
                {
                    move: 'moveTest1',
                    kills: 'killsTest1'
                },
                {
                    move: 'moveTest2',
                    kills: 'killsTest2'
                }
            ]
        }
        
        const expected = {
            moves: [
                {
                    move: 'moveTest1',
                    kills: 'killsTest1'
                },
                {
                    move: 'moveTest2',
                    kills: 'killsTest2'
                }
            ],
            error: {}
        }

        assert.deepEqual(configuration(state, action), expected)
    })

    it('REMOVE_MOVE', () => {

        const state = {
            moves: [
                {
                    _id: 1,
                    move: 'moveTest1',
                    kills: 'killsTest1'
                },
                {
                    _id: 2,
                    move: 'moveTest2',
                    kills: 'killsTest2'
                }
            ],
            error: {}
        }
        
        const action = {
            type: REMOVE_MOVE,
            payload: 1
        }
        
        const expected = {
            moves: [
                {
                    _id: 2,
                    move: 'moveTest2',
                    kills: 'killsTest2'
                }
            ],
            error: {}
        }

        assert.deepEqual(configuration(state, action), expected)
    })

    it('ERROR', () => {

        const state = {
            moves: [],
            error: {}
        }
        
        const action = {
            type: ERROR,
            payload: {message: 'Error message'}
        }
        
        const expected = {
            moves: [],
            error: {message: 'Error message'}
        }

        assert.deepEqual(configuration(state, action), expected)
    })

    it('DEFAULT', () => {

        const state = {
            moves: [],
            error: {}
        }
        
        const action = {
            type: 'DEFAULT',
            payload: {}
        }
        
        const expected = {
            moves: [],
            error: {}
        }

        assert.deepEqual(configuration(state, action), expected)
    })

})