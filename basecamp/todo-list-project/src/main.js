import Todos from './api/todos'
import './assets/css/main.css'

const apiTodos = new Todos()

async function exec() {
  const todos = await apiTodos.index()

  console.log(todos)
}

exec()
