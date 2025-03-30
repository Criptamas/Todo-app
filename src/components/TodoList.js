import './TodoList.css'

function TodoList(props){
  


 return(
  <section>
    {props.error && props.onError()}

    {props.loading && props.onLoading()}

    {(!props.loading && !props.totalTodos) && props.onEmtyTodos()}

    {(!!props.totalTodos && !props.searchedTodos.length)&& props.onEmtySearh(props.searchText)}

    {props.searchedTodos.map(props.children)}

    <ul>
      {props.children}
    </ul>
  </section>
 )
}

export { TodoList }