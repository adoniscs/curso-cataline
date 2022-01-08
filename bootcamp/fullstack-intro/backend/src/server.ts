import express from 'express'
import cors from 'cors'
import { v4 as uuid } from 'uuid'

const server = express()
const PORT = 3333

server.use(express.json())
server.use(cors())

interface User {
  id: string
  name: string
  email: string
}

const users: User[] = []

server.get('/users', (request, response) => {
  // buscar os usuários no banco de dados
  // mas como não tem nenhum banco de dados,
  // a aplicação vai apenas retornar os dados passados no array
  // retornar os usuários
  return response.json(users)
})

server.post('/users', (request, response) => {
  // receber os dados do novo usuário
  const { name, email } = request.body

  // criar um novo usuário
  const user = { id: uuid(), name, email }

  // registrar esse novo usuário na base de dados (array users)
  users.push(user)

  // retornar os dados do usuário criado
  return response.json(users)
})

server.put('/users/:id', (request, response) => {
  // receber os dados do usuário
  const { id } = request.params
  const { name, email } = request.body

  // localizar o usuário na base de dados
  const userIndex = users.findIndex(user => user.id === id)

  // se o usuário não existir, retornar um erro
  if (userIndex < 0) {
    return response.status(404).json({ error: 'user not found.' })
  }

  // atualizar o usuário na base de dados (array users)
  const user = { id, name, email }
  users[userIndex] = user

  // retornar os dados do usuário atualizado
  return response.json(user)
})

server.delete('/users/:id', (request, response) => {
  // receber id do usuário
  const { id } = request.params

  // localizar o usuário na base de dados ( array users )
  const userIndex = users.findIndex(user => user.id === id)

  // se o usuário não existir, retornar um erro
  if (userIndex < 0) {
    return response.status(404).json({ error: 'User not found.' })
  }

  // excluir usuário da base de dados ( array users )
  users.splice(userIndex, 1)

  // retornar status de sucesso
  return response.status(204).send()
})

server.listen(PORT, () => {
  console.log('Server is running!')
})
