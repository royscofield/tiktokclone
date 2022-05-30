import { useRef, useState } from 'react'
import { useStore, actions } from './store'

function App() {

  const inputRef = useRef()

  const [idTodo, setIdTodo] = useState('')
  const [changeButton, setChangeButton] = useState(false)
  const [state, dispatch] = useStore()

  const handleClick = () =>
  {
      dispatch(actions.addTodo(state.todo))
      dispatch(actions.getTodo(''))
      inputRef.current.focus()
  }

  const handleEdit = (index, todo) =>
  {
      setChangeButton(!changeButton)
      dispatch(actions.getTodo(todo))
      setIdTodo(index)
      inputRef.current.focus()
  }

  const handleUpdate = () =>
  {
      dispatch(actions.editTodo(idTodo, state.todo))
      dispatch(actions.getTodo(''))
      inputRef.current.focus()
      setIdTodo('')
      setChangeButton(!changeButton)
  }

  return (
        <div className="App" style={{padding: '20px'}}>
            <h3>ToDo:</h3>
            <input 
                ref={inputRef}
                value={state.todo}
                placeholder="Enter todo..."
                onChange={e => {dispatch(actions.getTodo(e.target.value))}}
            />
            <button
                onClick={changeButton === false ? handleClick : handleUpdate }
            >
                {changeButton === false ? 'Add' : 'Update'}
            </button>

            <ul>
              {state.todoList.map( (todo, index) => (
                <li key={index}>
                    {todo}
                    <span onClick={ () => handleEdit(index, todo)}>&nbsp; edit </span>
                    <span onClick={ () => dispatch(actions.deleteTodo(index))}> &times; </span>
                </li>
              ))}
            </ul>
        </div>
  );
}

export default App;
