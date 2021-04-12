import {combineReducers} from 'redux';
import flowers from './flowersReducer'
import buques from './buquesReducer'
import local from './localReducer'
 
export default combineReducers({
    flowers,
    buques,
    local
})