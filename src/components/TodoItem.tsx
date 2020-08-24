import React from 'react'

interface Props {
    todo: Todo
    toggleTodo: ToggleTodo
    removeTodo: RemoveTodo
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {

    return (
        <li>
            <label className={ todo.complete ? "complete" : "" }>
                <input type='checkbox' 
                    checked={todo.complete} 
                    onChange={() => toggleTodo(todo)}
                />
                {todo.text}
            </label>
            <button onClick={() => removeTodo(todo) }> x </button>
        </li>
    )
}

export default TodoItem
