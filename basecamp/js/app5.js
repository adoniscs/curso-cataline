const $button = document.querySelector('#app button')

$button.addEventListener('click', (event) => {
  event.preventDefault()
  const apiGitHub = 'https://api.github.com/users'

  const xhr = new XMLHttpRequest()

  xhr.open('GET', apiGitHub)
  xhr.send()

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText)
      console.log(data[20].node_id)
    }
  }
})
