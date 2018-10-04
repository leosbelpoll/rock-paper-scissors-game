import {combineReducers} from 'redux';
import gameReducer from './gameReducer';
import configurationReducer from './configurationReducer';

export default combineReducers({
    game: gameReducer,
    configuration: configurationReducer
})