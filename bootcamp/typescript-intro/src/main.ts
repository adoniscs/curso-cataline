interface User {
  name: string
  address?: {
    city: string
    UF: string
  }
}

function showCity(user: User) {
  return user
}

const response = showCity({
  name: 'Adonis',
  address: {
    city: 'São Paulo',
    UF: 'SP',
  },
})

console.log(response)

import { sum } from './calculator'
import { diference } from './calculator'

console.log(sum('50', '19'))
console.log(diference(50, 19))
