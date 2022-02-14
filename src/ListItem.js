import React from 'react'

export default function ListItem({todo, id}) {
  return (
    <div><li>
    <label htmlFor={id}>
      <input type="checkbox" id={id}/>
      {todo.name}
    </label>
    <button>Edit</button>
  </li>
  </div>
  )
}

