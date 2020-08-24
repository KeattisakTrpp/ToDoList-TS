import React from 'react'
import TodoItem from './TodoItem'

interface Props {
    todos: Array<Todo>
    toggleTodo: ToggleTodo
    removeTodo: RemoveTodo
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, removeTodo }) => {
    return (
        <ul className="content">
            {
                todos.map((todo, index) => {
                    return <TodoItem key={index} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}></TodoItem>
                })
            }
        </ul>
    )
}

export default TodoList