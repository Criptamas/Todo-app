import React from 'react'
import './FormCreateTodo.css'

function FormCreateTodo({ 
  addTodo,
  setOpenModal,
  newTodoValue,
  setNewTodoValue
}){

 
 const isDescriptionValid = (newTodoValue.length > 1) ? true : false


 const onSubmit = (e)=>
  {

   e.preventDefault()
   if (!isDescriptionValid) return
   addTodo(newTodoValue.trim())
   setOpenModal(false)
   setNewTodoValue('')
  }

  const onClose = ()=>
   {
    setOpenModal(false)
   }

   const onChange = (e) =>
   {
    setNewTodoValue(e.target.value)
   
   }
   
 return(
  <form onSubmit={onSubmit} className='TodoForm' >

   <label>Agrega un nuevo TODO</label>

   <textarea  
    placeholder="Ej. Estudiar Inglés"
    value={newTodoValue}
    onChange={onChange}
    required
   />

  <div className='TodoForm-buttonContainer'>
    
  <button type="button" className={`
    TodoForm-button--cancel
    TodoForm-button TodoForm-button--add ${isDescriptionValid ? '' : 'disabled'}`} onClick={onClose}>Cancelar</button>

  <button className='TodoForm-button TodoForm-button--add'>Agregar</button>


 
  </div> 
  
  </form>
 )
}

export { FormCreateTodo } 