import React, { useState, ChangeEvent, FormEvent } from 'react'

interface Props {
    addTodo: AddTodo
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTodo({ text: newTodo, complete: false })
        setNewTodo('')
    }

    return (
        <form>
            <input value={newTodo} onChange={handleChange}/>
            <button onClick={handleSubmit} >Add Todo</button>
        </form>
    )
}

export default AddTodoForm