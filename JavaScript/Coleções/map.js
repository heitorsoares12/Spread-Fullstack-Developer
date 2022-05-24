//Estrtura
//Uma coleção de arrays, no formato [chave, valor];
//Pode iterado por um loop for...of
 
//Métodos
//Adicionar, ler e deletar
const myMap = new Map()

myMap.set('apple', 'fruit');
//Map(1) {"apple" => "fruit"}

myMap.get("apple");
//"fruit"

myMap.delete("apple")
//true

myMap.get("apple")
//undefined