// Operador Lógico ou (||)
//Retorna TRUE se os dois operandos forem true

// console.log(false && true);

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ' + podeAplicar);

//Operador NOT (!)

let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado ',candidatoRecusado)