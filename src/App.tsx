import React, { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import './style.css'

const initialTodos:Array<Todo> = [
  {text: "item1", complete: true},
  {text: "item2", complete: false}
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  
  const toggleTodo:ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) return { ...todo, complete: !todo.complete }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo:AddTodo = newTodo => {
    if(newTodo.text.trim() !== ""){
      setTodos([...todos, newTodo])
    }
  }

  const removeTodo:RemoveTodo = selectedTodo => {
    const newTodo = todos.filter(todo => todo !== selectedTodo)
    setTodos(newTodo)
  }

  return (
    <div className="container">
      <h1>Simple Todo List</h1>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
