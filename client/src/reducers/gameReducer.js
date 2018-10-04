import { START_GAME, START_ROUND, FINISH_ROUND, FINISH_GAME, FETCH_STATISTICS, FETCH_EMPEROR, ERROR, RESTART_GAME, REMATCH_GAME } from '../actions/types'

const initialState = {
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

export default function (state = initialState, action){
    switch(action.type){
        case START_GAME:
            return {
                ...state,
                player1: action.payload.player1,
                player2: action.payload.player2,
            }
        case RESTART_GAME:
            return {
                ...state,
                player1: {},
                player2: {},
                currentPlayer: 1,
                roundsWon: [],
                move: '',
                winner: {},
                error: {},
            }
        case REMATCH_GAME:
            return {
                ...state,
                player1: action.payload.player1,
                player2: action.payload.player2,
                currentPlayer: 1,
                roundsWon: [],
                move: '',
                winner: {},
                error: {},
            }
        case START_ROUND:
            return {
                ...state,
                move: action.payload,
                currentPlayer: 2
            }
        case FINISH_ROUND:
            return {
                ...state,
                move: '',
                roundsWon: [
                    ...state.roundsWon,
                    action.payload
                ],
                currentPlayer: 1
            }
        case FINISH_GAME:
            return {
                ...state,
                winner: action.payload
            }
        case FETCH_STATISTICS:
            return {
                ...state,
                statistics: action.payload
            }
        case FETCH_EMPEROR:
            return {
                ...state,
                emperor: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}