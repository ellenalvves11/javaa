console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
// Criar um elemento h1
let titulo = document.createElement('h1');

// Adicionar texto ao elemento
titulo.innerText = 'Olá, mundo! Isso foi criado só com JavaScript';

// Adicionar o elemento ao corpo da página
document.body.appendChild(titulo);