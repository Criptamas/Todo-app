import  React from 'react';
import './TodoInput.css'
import {  useConUSer } from '../context/TodoContext';

function TodoInput()
{

  const { valor, setValor } = useConUSer()

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