//IF / ELSE

//Condição
//Declaração 1(dentro de if): Ocorre caso a condição seja verdadeira
//Declaração 2(dentro de else): Ocorre caso a condição seja falsa
function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return resultado;
}

numeroPositivo(2)
//true

numeroPositivo(-9)
//false


function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo){
        return false;
    }

    return true;
}

//Javascript não tem elseif, as palavras sempre estão espaçadas!
function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if (ehNegativo) {
        return "Esse numero é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse numero é positivo e maior que 10!"
    }

    return "Esse numero é positivo";
}

numeroPositivo(2)
//Esse numero é positivo

numeroPositivo(-2)
//Esse numero é negativo!

numeroPositivo(40)
//Esse numero é positivo e maior que 10!


//SWITCH / CASE

//Equivale a uma comparação de tipo e valorr (===)
//Sempre precisa de uma valor "default"
//Ideal para quando se precisa compara muitos valores
function getAnimal(id) {
    switch (id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "passaro";   
        default:
            return "peixe";
    }
}

getAnimal(1) //CAO
getAnimal(4) //PEIXE
getAnimal("1") //PEIXE