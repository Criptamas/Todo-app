import React from 'react'
import { useConUSer } from '../context/TodoContext'
import './TodoCounter.css'

function TodoCounter(){
  
  const { todosCompleted, totalTodos } = useConUSer()

 return(
   <h1 className="TodoCounter">
     Has completado <span>{todosCompleted}</span> de <span>{totalTodos}</span> TODOs
   </h1>
 )
}

export {TodoCounter}