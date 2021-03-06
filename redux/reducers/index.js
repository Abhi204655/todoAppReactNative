import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import themeReducer from './themeReducer';


export default combineReducers({
    todo: todoReducer,
    theme: themeReducer
})