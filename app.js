//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function consoleClick(){
    consoleClick.log('O botão foi clicado');
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function alertaClick(){
    alert('Eu amo JS');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function promptClick(){
    let cidade = prompt('Qual sua cidade?');
    promptClick.log(`Estive em ${cidade} e lembrei de você`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somaClick(){
    let numero1 = prompt('Digite o primeiro número para realizar a soma:');
    let numero2 = prompt('Digite o segundo número para realizar a soma:');
    alert(`Soma = ${parseInt(numero1)+parseInt(numero2)}`)

}