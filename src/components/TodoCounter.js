import React from 'react'
import './TodoCounter.css'

function TodoCounter({todosCompleted, totalTodos}){
  


 return(
   <h1 className="TodoCounter">
     Has completado <span>{todosCompleted}</span> de <span>{totalTodos}</span> TODOs
   </h1>
 )
}

export {TodoCounter}