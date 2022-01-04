const numbers = [1, 2, 3, 4, 5]

// jeito não apropriano, pois vai contra um dos conceitos
// da programação funcionar, que é a imutabilidade
// ===============================================
// numbers.forEach(function (number, index) {
//   let result = (numbers[index] = number + 1)
//   console.log(result)
// })

// o jeito recomendado de se fazer, é criando um
// novo array a partir de um existente
const newNumber = numbers.map(function(number) {
  return number + 1
})

console.log(newNumber);
console.log(numbers);