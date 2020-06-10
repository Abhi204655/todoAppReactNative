import { DARK_THEME, LIGHT_THEME, GET_THEME } from './types';

export const darkTheme = () => {
    return {
        type: DARK_THEME
    }
}

export const lightTheme = () => {
    return {
        type: LIGHT_THEME
    }
}

export const getTheme = () => {
    return {
        type: GET_THEME
    }
}


