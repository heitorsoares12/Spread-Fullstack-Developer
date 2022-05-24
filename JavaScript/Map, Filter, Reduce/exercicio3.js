function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const nums = [1, 23, 4, 56, 6, 7, 4];

console.log(filtraPares(nums));