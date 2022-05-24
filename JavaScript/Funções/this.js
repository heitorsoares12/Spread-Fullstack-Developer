//THIS
//A palavra reservada THIS é uma referência de contexto.
//No exemplo, this refere=se ao objeto pesooa.
const pessoa = {
    firstName: "Heitor",
    lastName: "Soares",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

pessoa.fullName();
//"Heitor Soares"

pessoa.getId();
//1


//CALL
const planeta = {
    nome: 'Jupiter',
};
const animal = {
    nome: 'Leão',
};

function getSomething() {
    console.log(this.planeta);
}

getSomething.call(pessoa);

//É possivel passar parâmetros parra essa função separando-os por vírgulas.
const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);
//12


//APPLY
const carro = {
    nome: 'Focus',
};
const marca = {
    nome: 'Ford',
};

function getSomething() {
    console.log(this.carro);
}

getSomething.apply(carro);

//É possível passar parâmetros para essa função dentro de um array.
const obj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(obj, 1, 5);
//12


//BIND
//Clona a estrutura da função onde é chamada e aplica o valor do obejto passado como parâmetro.
const retornaNomes = function () {
    return this.nome;
};

let heitor = retornaNomes.bind({ nome: 'Heitor' });

heitor();
//Heitor