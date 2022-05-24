//solução 1
function verrificaPalindromo(string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

//solução 2
function verrificaPalindromo2(string) {
    if(!string) return "sting inexistente";
    
    for (let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 -i]){
            return false;
        }
    }

    return true;
}

console.log(verrificaPalindromo2("gato"))