// let array = ["adonis", "oliver", "juana"]

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

// let posicao = array.indexOf("juana")
// console.log(posicao)

// ============== manipulando a DOM ==============

// window.location.href = "https://www.google.com.br"

/*
document.getElementById // seleciona por ID
document.getElementByTagName // seleciona por TAG
document.getElementByClassName // seleciona por CLASS
document.querySelector // seleciona por seletor especifico
document.querySelectorAll // seleciona todos por seletor especifico

.parentElement // pai
.parentElement.parentElement // pai do pai
.previousElementSibling // elemento anterior
.nextElementSibling // elemento seguinte
.children // HTMLCollection com os filhos
.choldren[0] // primeiro filho
*/

const button = document.querySelector("#app button")
const input = document.querySelector("input#idade")


button.addEventListener('click', (event) => {
  event.preventDefault()
  alert(`Sua idade é ${input.value}`)
})