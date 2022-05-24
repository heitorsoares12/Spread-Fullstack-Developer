//ARAYS
//Spread: uma forma de lidar separadamente com elementos

//O que era parte de um array se torna um elemento independente.
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


//Rest: combina os argumnetos em um array

//O que era um elemento independente se torna parte de um array.
function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() //0
confereTamanho(1, 2)  //2
confereTamanho(3, 4, 5) //3


//OBJETOS
//Object Destructuring

//Entre chaves{}, podemos filtrar apenas os dados que nos interessam em uma objeto.
const user = {
    id: 42,
    displayName: 'Heitor',
    fullName: {
        firstName: 'Heitor',
        lastName: 'Soares'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user)
//42

getFullName(user)
//Heitor Soares