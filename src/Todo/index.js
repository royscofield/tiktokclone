
import {useEffect, useLayoutEffect, useState, useRef, useMemo, useReducer } from 'react'





//reducer



function App() {

  const newRef = useRef()

  const [state , dispatch] = useReducer(reducer, initState)
  const {job, jobs} = state

  const handleClick = () =>
  {
      dispatch(addJob(job))
      dispatch(setJob(''))

      newRef.current.focus()

  }

  return (
    <div className="App" style={{padding: '0 20px'}}>

      <h2>ToDo:</h2>
      
      <input 
          ref={newRef}
          value={job}
          placeholder='enter todo...'
          onChange={(e) => {dispatch(setJob(e.target.value))}}
      />

      <button
          onClick={handleClick}
      >
          Add
      </button>

      <ul>
        {jobs.map((job,index) => (
            <li key={index}>
                {job}
                <span onClick={() => dispatch(deleteJob(index))}> &times; </span>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
