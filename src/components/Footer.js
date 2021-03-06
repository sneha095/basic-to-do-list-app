import React, {useContext, useState} from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
const [checkAll, setCheckAll]= useState(false)
const [todos, setTodos] = useContext(DataContext)

const handleCheckAll = () => {
  const newTodos = [...todos]
  newTodos.forEach(todo =>{
    todo.complete = !checkAll
  })

  setTodos(newTodos)
  setCheckAll(!checkAll)
}

const newTodosComplete = () => {
  return todos.filter(todos => todos.complete === false)
}

 const deleteToDo = () => {
   setTodos(newTodosComplete())
   setCheckAll(false);
 }

 
  return (
    <>
        {
            todos.length === 0 ? <h2>Congratulations! No Tasks!</h2> 
                :  <div className="row">
                    <label htmlFor="all">
                        <input type="checkbox" name="all" id="all"
                        onChange={handleCheckAll} checked={checkAll} />
                        ALL
                    </label>
                    <p>You have {newTodosComplete().length} to do</p>
                    <button id="delete" onClick={deleteToDo}>Delete</button>
                </div>
        }
        </>
    )
}
