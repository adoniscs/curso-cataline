const $submitButton = document.querySelector('#app button')
const $zipCodeField = document.querySelector('#app form input')
const $content = document.querySelector('#app main')

$submitButton.addEventListener('click', run)

function run(event) {
  event.preventDefault()

  let zipCode = $zipCodeField.value

  zipCode = zipCode.replace(' ', '')
  zipCode = zipCode.replace('.', '')
  zipCode = zipCode.trim()

  const apiViaCEP = `https://viacep.com.br/ws/${zipCode}/json`

  axios
    .get(apiViaCEP)
    .then(function (response) {
      if (response.data.erro) {        
        throw new Error('CEP inválido')
      }

      $content.innerHTML = ''
      createLine(response.data.logradouro)
      createLine(response.data.bairro)
      createLine(`${response.data.localidade}/${response.data.uf}`)
      $zipCodeField.value = ''
    })
    .catch(function (error) {
      $content.innerHTML = ''
      createLine('Ops, algo deu errado!')
      $zipCodeField.value = ''
    })
}

function createLine(text) {
  const createLine = document.createElement('p')
  const createText = document.createTextNode(text)

  createLine.appendChild(createText)
  $content.appendChild(createLine)
}
