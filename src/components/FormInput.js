import React, {useState, useContext} from 'react'
import { DataContext } from './DataProvider'


export default function FormInput () {

  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setToDoName] = useState('');
  
  const addToDo = e =>{
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setToDoName('');
  }
  return (
    <div>
        <form autoComplete="off" onSubmit={addToDo}>
        <input type="text" name="todos" id="todos"
        required placeholder="What needs to be done?" value={todoName} 
        onChange={e => setToDoName(e.target.value.toLowerCase())}/>
        <button type="submit">Create</button>
        </form>
        
    </div>
  )
}
