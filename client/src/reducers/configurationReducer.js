import { FETCH_MOVES, CREATE_MOVE, REMOVE_MOVE, ERROR } from '../actions/types'

const initialState = {
    moves: [],
    error: {}
}

export default function (state = initialState, action){
    switch(action.type){
        case CREATE_MOVE:
            return {
                ...state,
                moves: [
                    action.payload,
                    ...state.moves
                ],
                error: {}
            }
        case FETCH_MOVES:
            return {
                ...state,
                moves: action.payload,
                error: {}
            }
        case REMOVE_MOVE:
            return {
                ...state,
                moves: state.moves.filter(move => move._id !== action.payload),
                error: {}
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