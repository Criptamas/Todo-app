import './TodoList.css'

function TodoList(props){
  const resultDefault = props.children || props.onSearchedTodos


  return(
  <section>
    {props.error && props.onError()}

    {props.loading && props.onLoading()}

    {(!props.loading && !props.totalTodos) && props.onEmtyTodos()}

    {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmtySearh(props.searchText)}

    {props.searchedTodos.map(resultDefault)}

    <ul>
      {props.children}
    </ul>
  </section>
 )
}

export { TodoList }