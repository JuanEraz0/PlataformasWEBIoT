const numeros = [1,2,3,4];

let [uno,dos,tres] = [1,2,4];

console.log(dos);


// Sin desestructuracion

let numeros2 = {
    uno: 1,
    dos: 2,
    tres: 4,
};

console.log(numeros2.tres);
//Con destructuracion

let {uno1, dos2, tres3} = {
    uno1: 1,
    dos: 2,
    tres: 4,
};

console.log(uno1);