import  React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal'
import { FormCreateTodo } from './components/FormCreateTodo';
import { EmptyTodos } from './components/EmptyTodos'
import {TodosLoading } from './components/TodosLoading'
import { TodosError } from './components/TodosError'
import {  useConUSer } from './context/TodoContext';


function App() {

  const { 
    loading,
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = useConUSer()
  
  return (
    <>
      
    <TodoCounter/>
    
    <TodoInput />

  <TodoList>
  {loading ?
    <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
    </> : null}

    {error ? <TodosError /> : null}
    
    {(!loading && searchedTodos.length === 0) ? <EmptyTodos /> : null}
    
    {
      searchedTodos.map((todo,index) =>(
        <TodoItem
        key={index}
        text={todo.text} 
        completed={todo.completed}
        onComplete={()=>{ completeTodo(todo.text)}}
        onDelete={()=> {deleteTodo(todo.text)}}
        />
      ))
    }
  </TodoList>
    
    <CreateTodoButton 
       setOpenModal={setOpenModal}
    />
    {
      openModal && (
      <Modal>
          <FormCreateTodo />
      </Modal>
      )
    }    
    </>
  );
}



export { App };
