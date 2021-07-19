import { observer } from 'mobx-react-lite'
import React from 'react'
import todo from './store/todo'

function Todo() {
    return (
        <div>
            <button onClick={()=> todo.fetchTodo()}>Fetch todos</button>
            {
                todo.todos.map(t=>(
                    <div className="todo" key={t.id}>
                        <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                        {t.title}
                        <button onClick={()=> todo.removeTodo(t.id)}>X</button>
                    </div>
                ))
            }
        </div>
    )
}

export default observer(Todo)
