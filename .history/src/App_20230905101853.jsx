import { useState } from 'react'
import './App.css'
import Index from './TodoList/Index'
import TodoList from './TodoList/todoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Index />
      <TodoList />
    </>
  )
}

export default App
