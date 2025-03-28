import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = React.createContext()

export function TodoProvider ({ children }) {
 
 const 
 {
   item: todos,
   saveItem: saveTodos,
   loading,
   error
 } = useLocalStorage("TODOS_V1",[])

 const [valor, setValor] = React.useState('')
 const [openModal, setOpenModal] = React.useState(false)
 const [validSatus, setValidSatus] = React.useState(false);
 const [ newTodoValue, setNewTodoValue ] = React.useState('')
 
 // Estados derivados

 const todosCompleted = todos.filter(
   todo => !!todo.completed // La doble negacion transforma el valor de la condicion en booleano 
 ).length  // Con el length estamos devolviendo el numero exacto de las tareas completas en formato de numero y no de string


 const totalTodos = todos.length;

 const searchedTodos = todos.filter(
   todo => todo.text.toLowerCase().includes(valor.toLowerCase())
   // Cuando el filter no se ejecuta simplemente devuelte el array con el valor default
 )


const addTodo = (text) =>{
  const newTodos = [...todos]
  newTodos.push({
    text,
    completed: false
  })
  saveTodos(newTodos)
}

React.useEffect(()=>{
  
if (newTodoValue) {
  const isDuplicate = todos.some(todo => todo.text.toLowerCase() === newTodoValue.toLowerCase());

  if (isDuplicate) {
    setValidSatus(!validSatus);
    alert('Ya existe esa tarea');
    setNewTodoValue('');
  }
}
} , [newTodoValue,todos, validSatus])

const completeTodo = (text) =>{
 const newTodos = [...todos]
 const todoIndex = newTodos.findIndex(todo => todo.text === text)
 newTodos[todoIndex].completed = !newTodos[todoIndex].completed
 saveTodos(newTodos)
}

const deleteTodo = (text) =>{
 const newTodos = [...todos]
 const todoIndex = newTodos.findIndex(todo => todo.text === text)
 newTodos.splice(todoIndex, 1)
 saveTodos(newTodos)
}

 return (
  <TodoContext.Provider
    value=
    {{
      loading,
      error,
      valor,
      setValor,
      openModal, 
      setOpenModal,
      validSatus,
      newTodoValue, 
      setNewTodoValue,
      todosCompleted,
      totalTodos,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo
    }}
  >
    {children}
  </TodoContext.Provider>
  )
}

export const useConUSer =()=> React.useContext(TodoContext)