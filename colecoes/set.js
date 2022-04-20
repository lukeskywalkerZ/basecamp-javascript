const meuArray = [10, 20, 30, 100, 4480, 2];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));
