/** Faça um programa para calcular o valor de uma viagem.
 * Você terá 3 variaveis
 * Preço do combustivel 
 * Gasto medio do carro por quilometro
 * Distancia em KM por viagem
 */
const priceFuel = 5.98;
const averageWaste = 20;
const distance = 200;

let consumedLiters = distance/averageWaste;
let valueWasted = consumedLiters*priceFuel

console.log(valueWasted.toFixed(2));/*o toFixed serve para o arredondamento colocando o numero de casas após a virgula*/ 
