const arreglo = ["uva", "banana", "pera"];

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);

//utilizando forEach
/*
arreglo.forEach(elemento => {
    console.log(elemento);
});
*/

arreglo.forEach((element, indice)=>{
    console.log(`La fruta ${element} se encuentra en la posicion: ${indice}`);
});

arreglo[20]="tuna";

arreglo.forEach((element, indice)=>{
    console.log(`La fruta ${element} se encuentra en la posicion: ${indice}`);
});