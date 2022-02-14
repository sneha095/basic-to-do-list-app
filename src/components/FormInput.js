import React from 'react'

export default function FormInput () {
  return (
    <div>
        <form autoComplete="off">
        <input type="text" name="todos" id="todos"
        required placeholder="What needs to be done?" />
        <button type="submit">Create</button>
        </form>
        
    </div>
  )
}
