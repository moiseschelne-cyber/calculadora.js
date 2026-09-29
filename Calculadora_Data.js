const readline = require('node:readline/promises');
const {stdin: input, stdout: output} = require('node:process');


async function main(){

//1. Interface de leitura

const rl = readline.createInterface({input,output});

//2. Leitura dos dados

const dataInicialStr = await rl.question("Digite a Data Inicial: (AAAA-MM-DD): ");
const dataFinalStr = await rl.question("Digite a Data Final: (AAAA-MM-DD): ");

let dataInicial = new Date(dataInicialStr);
let dataFinal = new Date(dataFinalStr);
let dias;

//datafinal - datainicial = Milissegundos. (1000*60*60*24)
//1 segundo = 1000 milisse / 1 minuto = 1000*60 / 1 hora = 1000*60*60 / 1 dia = 1000*60*60*24

//Math.trunc(numero) - formula para trazer o inteiro

dias = (dataFinal - dataInicial)/86400000;
meses = Math.trunc(dias/30);
anos = Math.trunc(dias/365);

calc_qtd_meses = meses - (anos*12);
calc_qtd_dias = dias - (meses*30);


console.log(`\nNumero de anos: ${anos}`);
console.log(`\nNumero de Meses: ${calc_qtd_meses}`);
console.log(`\nNumero de Anos: ${calc_qtd_dias}`);

}

main();