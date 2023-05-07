const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

const encontraPrimeiros = numeros.find((numero) => numero == 2); // encontra o primeiro e pára
const filtraPor = numeros.filter((numero) => numero == 3); // cria nova array, não modifica a original
const executaEmTodos = numeros.map((numero) => numero * 2); // cria (retorna) nova array, não modifica a original
const verTodos = numeros.forEach((numero) => numero * 4); // NÃO cria nova array, não retorna nada
const reduzirPara = numeros.reduce((acumulador, itemAtual) => acumulador + itemAtual + 5); // não retorna array, retorna um valor só depois da operação que faz
const arrayConcatenada = numeros.concat([1, 1, 1, 1], [2, 2, 2, 2], "café"); // junta elementos ex.: string + string
const copiaParte = numeros.slice(2, 5); // copia um pedaço da array ==> vai pegar o 2, 4 e 3 e não vai pegar o 5, cria uma nova array
const localizaElemento = numeros.indexOf(5); // encontra o primeiro INDEX do elemento e pára
const verificaSeExiste = numeros.includes(3); // retorna booleano true ou false, existe ou não
const transfomaArrayEmString = numeros.join('  '); // metodo de array que transforma em string. 

// Modificam a array original:
const adicionaNoFinal = numeros.push(2, 3); // empurra, acrescenta elemento no final, retorna o valor total original
const removeUltimo = numeros.pop(); // retorna o valor que ele tirou
const removePrimeiro = numeros.shift(); // retorna o valor que ele tirou
const adicionaNoComeco = numeros.unshift(9, 8); // acrescenta elemento no começo
const removeEadiciona = numeros.splice(2, 3, "novoElemento"); // o primeiro parâmetro é o que eu quero tirar, e o segundo parâmetro é a qtidade de itens que eu quero que remove. O terceiro parâmetro é o que eu quero que ele adiciona

// console.log(encontraPrimeiros);
// console.log(filtraPor);
// console.log(executaEmTodos);
// console.log(verTodos);
// console.log(reduzirPara);
// console.log(arrayConcatenada);
// console.log(adicionaNoFinal);
// console.log(removePrimeiro);
// console.log(adicionaNoComeco);
// console.log(copiaParte);
// console.log(removeEadiciona);
// console.log(localizaElemento);
console.log(verificaSeExiste);
console.log(transfomaArrayEmString);

console.log(numeros);

// Simulando o que o map faz: (porque o forEach precisa dizer pra ele que ele retorna alguma coisa)
let arrayNova = [];
const verTodosArray = numeros.forEach((numero) => {
    const item = numero * 4
    arrayNova.push(item)
});

console.log(arrayNova);