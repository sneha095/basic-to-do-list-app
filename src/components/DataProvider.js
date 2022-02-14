import React, {useState, useEffect, createContext} from 'react'
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos]= useState([])
    //useffect used to retaing the data in localstorage and not lost on refresh
    useEffect(()=> {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    }, [])

    useEffect(() =>{
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos])

    
    return(
    <DataContext.Provider value={[todos, setTodos]}>
        {props.children}
    </DataContext.Provider>)
}
