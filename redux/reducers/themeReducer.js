import { DARK_THEME, LIGHT_THEME, GET_THEME } from '../actions/types';

const initialState = {
    textColor: '',
    primaryColor: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_THEME:
            return {
                ...state
            }
        case DARK_THEME:
            return {
                ...state,
                textColor: 'black',
                primaryColor: '#f40552'
            }
        case LIGHT_THEME:
            return {
                ...state,
                textColor: 'white',
                primaryColor: '#f40552'
            }
        default:
            return state
    }
}