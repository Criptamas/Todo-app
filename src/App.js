import  React from 'react';
import { useConUSer } from './hooks/useConUSer';
import { TodoCounter } from './components/TodoCounter';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodosLoading } from './components/TodosLoading'
import { TodosError } from './components/TodosError'
import { TodoHeader} from  './components/TodoHeader'
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal'
import { FormCreateTodo } from './components/FormCreateTodo';
import { EmptyTodos } from './components/EmptyTodos'



function App() {

  const { 
    loading,
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    todosCompleted, 
    totalTodos,
    valor, 
    setValor,
    addTodo,
    newTodoValue,
    setNewTodoValue
  } = useConUSer()
  
  return (
    <>
    <TodoHeader>

    <TodoCounter totalTodos={totalTodos} 
    todosCompleted={todosCompleted}/>
    
    <TodoInput 
    valor={valor}
    setValor={setValor}
    />

    </TodoHeader>

    <TodoList

      loading={loading}
      error={error}
      searchedTodos={searchedTodos}
      searchText={valor}
      totalTodos={totalTodos}

      onLoading={()=>(
        <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
        </>
      )}
      onError={()=> <TodosError /> }

      onEmtyTodos={()=><EmptyTodos />}

      onEmtySearh={(searchText)=>(
        <p>Upps!! No se ha encontrado: {searchText}</p>
      )}

    >
      {
        (todo, index) =>(
          <TodoItem
          key={index}
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=>{ completeTodo(todo.text)}}
          onDelete={()=> {deleteTodo(todo.text)}}
          />
        )
      }
    </ TodoList>
    
    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />

    {
      openModal && (
      <Modal>
          <FormCreateTodo
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            newTodoValue={newTodoValue}
            setNewTodoValue={setNewTodoValue}
          />
      </Modal>
      )
    }    

    </>
  );
}



export { App };
