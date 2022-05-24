//SINTAXE
const helloWorld = function(){
    return "Hello World";
}

const helloWorld2 = () => {
    return "Hello World";
}

const helloWorld3 = () => "Hello World";

//Caso exista apenas uma linha, pode dispensar as chaves e o return.
//Caso exista apenas um parâmetro, pode dispensarrr os parâmetros.
const soma = (a, b) => a + b;
soma(4, 6);
//10

const soma2 = a => a;
soma(4);
//4
