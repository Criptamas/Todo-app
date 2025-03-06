import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}) {


  return (
  <div>
   <button onClick={()=> setOpenModal(state => !state)} className="CreateTodoButton">+</button>
  </div>

  
 )
}

export { CreateTodoButton }