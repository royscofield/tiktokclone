import { ADD_TODO, DELETE_TODO, GET_TODO, EDIT_TODO } from './constants'
//init state
const initState = {
    todo : '',
    todoList : []
}

const reducer = (state, action) =>
{
    switch(action.type)
    {
        case GET_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case DELETE_TODO:
            let newState = [...state.todoList]
            newState.splice(action.payload, 1)
            return {
                ...state,
                todoList: newState
            }
        case EDIT_TODO:
            let updateTodoList = [...state.todoList]
            updateTodoList[action.id] = action.payload

            return {
                ...state,
                todoList: updateTodoList
            }
        default:
            throw new Error ('Invalid action.')
    }
}

export {initState}
export default reducer