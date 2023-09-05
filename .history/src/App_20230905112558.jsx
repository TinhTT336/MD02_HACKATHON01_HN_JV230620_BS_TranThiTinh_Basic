import { useState } from 'react'
import './App.css'
import TodoList from './TodoList/todoList'
import Todos from './TodoList/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TodoList /> */}
      <Todos />
    </>
  )
}

export default App
