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

  const xhr = new XMLHttpRequest()

  xhr.open('GET', apiViaCEP)
  xhr.send()

  xhr.onreadystatechange = (data) => {
    data = JSON.parse(xhr.responseText)
    
    if (data.erro || (xhr.readyState === 1 && xhr.status === 400)) {
      $content.innerHTML = ''
      createLine('CEP inválido')
      $zipCodeField.value = ''
    } 
    else if (xhr.readyState === 4 && xhr.status === 200) {
      $content.innerHTML = ''
      createLine(data.logradouro)
      createLine(`Bairro: ${data.bairro}`)
      createLine(`${data.localidade}/${data.uf}`)
      $zipCodeField.value = ''
    }
  }
}

function createLine(text) {
  const createLine = document.createElement('p')
  const createText = document.createTextNode(text)

  createLine.appendChild(createText)
  $content.appendChild(createLine)
}
