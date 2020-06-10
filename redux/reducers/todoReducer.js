import { GET_TODOES, ADD_TODO, DELETE_TODO, MARK_COMPLETED } from '../actions/types';
const initialState = {
    todoes: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODOES:
            return {
                ...state,
                todoes: state.todoes
            }
        case ADD_TODO:
            return {
                ...state,
                todoes: [action.payload, ...state.todoes]
            }
        case DELETE_TODO:
            return {
                ...state,
                todoes: state.todoes.filter(todo => todo.id !== action.payload)
            }
        case MARK_COMPLETED:
            return {
                ...state,
                todoes: state.todoes.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed;
                        return todo;
                    } else {
                        return todo;
                    }
                })
            }
        default:
            return state;
    }
}
