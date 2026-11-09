function SaudarCliente(){
    //esse guarda o elemento que esta guradado em elemento constante nome-> documento
const nome = document.getElementById("nome").value;
//esse guarda o valor de mensagem que esta em vazio no h3 id.
const elementoMensagem = document.getElementById("mensagem-boas-vindas");


if (nome.trim()!== " ") {
    //Interpolação de string usando template literals
    elementoMensagem.textContent = `Olá, ${nome}! Seja bem-VideoEncoder(a).`;
} else{
    elementoMensagem.textContent = "Por favor, digite um nome válido.";
}
}

//Toda vez que for digitar tem que usar a função parseFloat pois tudo digitado é styring.
function calcular() {
    const n1 =parseFloat(document.getElementById("num1").value);
    const n2 =parseFloat(document.getElementById("num1").value);
    const divResultados = document.getElementById("resultados");
    

    //Operações matematicas
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const multiplicacao = n1 * n2;
    const divisao = n2 !== 0 ? (n1 / n2).toFixed(2) :"Divisão por zero não é permitida"
}