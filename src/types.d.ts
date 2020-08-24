type Todo = {
  text: string,
  complete: boolean
}

type ToggleTodo = (selectedTodo: Todo) => void
type AddTodo = (todo: Todo) => void
type RemoveTodo = (selectedTodo: Todo) => void
