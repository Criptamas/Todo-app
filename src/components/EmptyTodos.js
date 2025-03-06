import React from "react";
import './EmptyTodo.css';

function EmptyTodos() {
    return(
        <div className="emptyContainer">
            <p className="emptyTodo">Oyeeee! Aqui no hay tareas por realizar,</p>
            <p className="emptyTodo">¡Crea tu primer Tarea!</p>
        </div>
    );
}

export { EmptyTodos };