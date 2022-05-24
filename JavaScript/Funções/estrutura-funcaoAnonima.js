//ESTRUTURA
//Definição comum de uma função

//Variaveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.
function name(params) {
    //instruções
}

//Quando invocamos o "return", a função para de ser executado.
function name(params) {
    //instruções
    return; //Valorr de retorno
}

//FUNÇÃO ANÔNIMA
//Funções que representam expressões

//Uma varriável pode armazenar uma função.
const soma = function (a, b) {
    return a + b;
}

soma(1, 2) //3
soma(5, 4) //9



