import { FETCH_MOVES, CREATE_MOVE, REMOVE_MOVE, ERROR } from './types'

import axios from 'axios'

// Settings
import config from '../config'

export const createMove = (move) => dispatch => {
    axios(config.url_moves, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        data: move
    })
    .then(response => dispatch({
            type: CREATE_MOVE,
            payload: response.data.move
        })
    )
    .catch(err => dispatch({
        type: ERROR,
        payload: err.response.data
    }))
}

export const getMoves = () => dispatch => {
    axios(config.url_moves, {
        method: 'get'
    })
    .then(response => dispatch({
            type: FETCH_MOVES,
            payload: response.data.moves
        })
    )
    .catch(err => dispatch({
        type: ERROR,
        payload: err
    }))
}

export const removeMove = (id) => dispatch => {
    axios(`${config.url_moves}/${id}`, {
        method: 'delete'
    })
    .then(response => dispatch({
            type: REMOVE_MOVE,
            payload: response.data.id
        })
    )
    .catch(err => dispatch({
        type: ERROR,
        payload: err
    }))
}