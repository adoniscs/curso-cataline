const $button = document.querySelector('#app button')

$button.addEventListener('click', (event) => {
  event.preventDefault()

  const apiGitHub = 'https://api.github.com/users'

  axios
    .get(apiGitHub)
    .then((response) => {
      console.log(response.data[7])
    })
    .catch((error) => {
      console.log('Deu ruim', error)
    })
})
