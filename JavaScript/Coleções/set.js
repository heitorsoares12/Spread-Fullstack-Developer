//ESTRUTURA
//Sets são estruturas que armazenam apenas valore únicos.

//Métodos
//Adicionar, consultar e deletar
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1);
//true

mySet.has(3);
//false

mySet.delete(5);