import express from 'express'
const server = express()

server.get('/users', (request, response) => {
  return response.json(['usuário 1', 'usuário 2'])
})

server.post('/users', (request, response) => {
  return response.json({ message: 'Criando usuário' })
})

server.put('/users/:id', (request, response) => {
  return response.json({ message: 'Atualizando usuário' })
})

server.delete('/users/:id', (request, response) => {
  return response.json({ message: 'Deletando usuário ' })
})

server.listen(3000, () => {
  console.log('Server is running!')
})
