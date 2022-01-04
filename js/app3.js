// pegando a div app
const app = document.querySelector("div#app");

// criando um novo elemento HTML
const link = document.createElement("a");

// criando um texto para o novo elemento HTML
const textLink = document.createTextNode("Acessar");

// atribuindo o destino ao novo elemento HTML
link.setAttribute("href", "https://google.com.br");

// atribuindo o texto ao elento criado
link.appendChild(textLink);

// atribuindo o novo elemento para a div app
app.appendChild(link);

// estilizando o novo atributo 
link.style.color = "red"

// excluindo um elemento existente
const text = document.querySelector("div#app h1");
app.removeChild(text);
