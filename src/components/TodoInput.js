import  React from 'react';
import './TodoInput.css'

function TodoInput({ valor, setValor })
{


  return(

  <input 
  value={valor}

  onChange={(e)=> setValor(e.target.value)}

  className='TodoInput'
  placeholder='Ir al odontologo'
  />

)
}

export { TodoInput }