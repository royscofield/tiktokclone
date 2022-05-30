import { GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants'

export const getTodo = payload => {
    return { 
        type: GET_TODO,
        payload
    }
}

export const addTodo = payload => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = payload => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const editTodo = (id, payload) => {
    return {
        type: EDIT_TODO,
        payload,
        id
    }
}