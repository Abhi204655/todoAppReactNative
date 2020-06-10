import { GET_TODOES, ADD_TODO, DELETE_TODO, MARK_COMPLETED } from './types';

export const getTodoes = () => {
    return {
        type: GET_TODOES
    }
}

export const addTodo = (item) => {
    return {
        type: ADD_TODO,
        payload: item
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const markCompleted = (id) => {
    return {
        type: MARK_COMPLETED,
        payload: id
    }
}