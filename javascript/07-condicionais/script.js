//if (se condiçao idade for verdadeira)
const idade= 18;

if(idade >= 18){
    console.log("Boas-vindas à  área VIP!")
}


//If e Else (se condiçao idade for verdadeira ou falsa)
    let idadeNova = 16;
if(idadeNova >= 18){
    console.log("Boas vindas à área VIP");
//Se a consição for falsa.->
}else{

console.log("Voce vai para a área kids!");

}

//else if (segunda condição se a primeira não antendia)
let idadeInformada = 15;


if(idadeInformada >= 18){
    console.log("Boas vindas a area VIP!");
    
} else if (idadeInformada >= 13 && idadeInformada <= 17){
    console.log("Voce vai para a area teen!");
} else {
    console.log("Voce vai para Área Kids!");
}

// switch – o maestro das escolhas

let opcao = "pizza";

switch(opcao) {
case "pizza":
console.log("Pizza chegando!");
break;
case "sushi":
console.log("Sushi fresquinho!");
break;
case "hamburguer":
console. log("Hambúrguer suculento!")
break;
default:
console. log("Escolha inválida");
}