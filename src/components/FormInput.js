import React, {useState, useContext, useRef, useEffect} from 'react'
import { DataContext } from './DataProvider'


export default function FormInput () {

  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setToDoName] = useState('');
  const todoInput = useRef();
  
  const addToDo = e =>{
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setToDoName('');
    todoInput.current.focus();
  }

  useEffect(() => {
    todoInput.current.focus();
  },[])
  return (
    <div>
        <form autoComplete="off" onSubmit={addToDo}>
        <input type="text" name="todos" id="todos" ref={todoInput}
        required placeholder=" What needs to be done?" value={todoName} 
        onChange={e => setToDoName(e.target.value.toLowerCase())}/>
        <button type="submit">Create</button>
        </form>
        
    </div>
  )
}
