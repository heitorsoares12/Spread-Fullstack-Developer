//FOR
//Loop dentro de elementos iteráveis (arrays, strings).

function multiplicaPorDois(arr) {
    let multiplicados = [];

    for (let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 20];

multiplicaPorDois(meusNumeros);
//[4, 66, 912, 712, 80]


//FOR...IN
//Loop entre propriedades enumeráveis de um objeto.
function forInExemplo(obj) {
    for(prop in obj){
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Heitor",
    idade: "21",
    cidade: "Jales"
}

forInExemplo(meuObjeto);
// nome
// idade
// cidade


function forInExemplo2(obj) {
    for(prop in obj){
        console.log(obj[prop]);
    }
}

const meuObjeto2 = {
    nome: "Heitor",
    idade: "21",
    cidade: "Jales"
}

forInExemplo2(meuObjeto2);
// Heitor
// 21
// Jales


//F0R..OF
//Loop entre estruturas iteráveis (arrays, strings).
function logLetras(palavra) {
    for(letra of palavra){
        console.log(letra);
    }
}

const palavra = "Itaipava";

logLetras(palavra)
// I
// t
// a
// i
// p
// a
// v
// a


function logNumeros(nums) {
    for(num of nums){
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

logNumeros(nums)
// 30
// 20
// 233
// 2


//WHILE
//Executa instruções até que a condição se torne falsa.
function exemploWhile() {
    let num = 0

    while(num <= 5){
        console.log(num);
        num++;
    }
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5


//DO...WHILE
//Executa instruções até que a condição se torne falsa.
//Porém a primeira execução sempre ocorre.
function exemploWhile() {
    let num = 0

    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploWhile()
// 0
// 1
// 2
// 3
// 4
// 5

function exemploWhile() {
    let num = 6

    do{
        console.log(num);
        num++;
    }while(num <= 5)
}

exemploWhile()
// 6

