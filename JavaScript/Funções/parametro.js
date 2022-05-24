//VALORES PADRÃO
function exponencial(array, num = 1) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }

    return result;
}
exponencial([1, 2, 3, 4])
// [1, 2, 3, 4]

exponencial([1, 2, 3, 4], 4)
// [1, 8, 27, 64]


//OBJETO "ARGUMENTS"

//Um array com todos os parâmetros passados quando a função foi invocada.
function finMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

//FindMax(1, 2, 3, 6, 90, 1)
//90


function showArgs() {
    return arguments;
}
