import { START_GAME, START_ROUND, FINISH_ROUND, FINISH_GAME, FETCH_STATISTICS, FETCH_EMPEROR, ERROR, RESTART_GAME, REMATCH_GAME } from './types'

import axios from 'axios'

// Settings
import config from '../config'

export const startGame = (player1, player2) => dispatch => {
    axios(config.url_players, {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        data: {
            name: player1
        }
    })
    .then(resp1 => {
        axios(config.url_players, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            data: {
                name: player2
            }
        })
        .then(resp2 => {
            return dispatch({
                type: START_GAME,
                payload: {
                    player1: resp1.data.player,
                    player2: resp2.data.player
                }
            })
        })
        .catch(err => dispatch({
            type: ERROR,
            payload: err
        }))
    })
    .catch(err => dispatch({
        type: ERROR,
        payload: err
    }))

}

export const restartGame = () => dispatch => {
    return dispatch({
        type: RESTART_GAME,
        payload: {}
    })
}

export const rematchGame = (player1, player2) => dispatch => {
    return dispatch({
        type: REMATCH_GAME,
        payload: {
            player1,
            player2
        }
    })
}

export const startRound = (move) => dispatch => {
    return dispatch({
        type: START_ROUND,
        payload: move
    })
}

export const finishRound = (movePlayer1, movePlayer2) => dispatch => {
    axios.get(config.url_which_move_win, {
        method: 'get',
        params: {
            move1: movePlayer1,
            move2: movePlayer2
        }
    })
    .then(res => {
        return dispatch({
            type: FINISH_ROUND,
            payload: res.data.winner
        })
    })
    .catch(err => dispatch({
        type: ERROR,
        payload: err
    }))
}

export const finishGame = (winner) => dispatch => {
    axios(config.url_players, {
        method: 'put',
        data: {
            name: winner
        }
    })
    .then(res => {
        return dispatch({
            type: FINISH_GAME,
            payload: res.data.player
        })
    })
    .catch(err => dispatch({
        type: ERROR,
        payload: err
    }))
}

export const getEmperor = () => dispatch => {
    axios.get(config.url_emperor, {
        method: 'get',
    })
    .then(res => {
        return dispatch({
            type: FETCH_EMPEROR,
            payload: res.data.player
        })
    })
    .catch(err => dispatch({
        type: ERROR,
        payload: err
    }))
}

export const getStatistics = () => dispatch => {
    axios.get(config.url_statistics, {
        method: 'get',
    })
    .then(res => {
        return dispatch({
            type: FETCH_STATISTICS,
            payload: res.data.players
        })
    })
    .catch(err => dispatch({
        type: ERROR,
        payload: err
    }))
}