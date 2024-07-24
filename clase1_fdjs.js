//Tipos de variables

//VAR 
/*

En JavaScript, las palabras clave var, let y const se utilizan para declarar variables, pero tienen diferencias importantes en cuanto a su alcance, re-declaración, y reasignación. A continuación, se explican estas diferencias:

var
Alcance (Scope):

var tiene un alcance de función o global. Esto significa que si una variable se declara con var dentro de una función, es accesible en toda la función. Si se declara fuera de cualquier función, es accesible en todo el programa.
var no respeta el alcance de bloque (como dentro de una estructura if o un bucle).


if (true) {
  var x = 10;
}
console.log(x); // 10 (a pesar de estar dentro del bloque if)

Las variables declaradas con var pueden ser re-declaradas en el mismo alcance sin causar errores.
javascript

var y = 20;
var y = 30; // No hay problema

Las variables declaradas con var son "levantadas" (hoisted) al inicio de su contexto de ejecución, pero su inicialización no lo es. Esto significa que se pueden usar antes de la línea de declaración, aunque serán undefined.


console.log(z); // undefined
var z = 5;


//let
Alcance (Scope):

let tiene alcance de bloque, lo que significa que la variable solo existe dentro del bloque en el que se declara (por ejemplo, dentro de un if, for, etc.).

if (true) {
  let a = 10;
  console.log(a); // 10
}
console.log(a); // Error: a is not defined

Re-declaración:

No se puede re-declarar una variable con let en el mismo ámbito.

let b = 20;

// let b = 30; // Error: Identifier 'b' has already been declared

Hoisting:

Las variables declaradas con let también son "levantadas", pero no se pueden acceder antes de su declaración en el código debido a la "Zona Temporal Muerta" (TDZ).

console.log(c); // Error: Cannot access 'c' before initialization
let c = 5;
const
Alcance (Scope):

const también tiene alcance de bloque, similar a let.

if (true) {
  const d = 10;
  console.log(d); // 10
}
console.log(d); // Error: d is not defined
Re-declaración:

No se puede re-declarar una variable const en el mismo ámbito.

const e = 20;
// const e = 30; // Error: Identifier 'e' has already been declared
Hoisting:

Similar a let, las variables const también son "levantadas", pero no se pueden usar antes de ser declaradas.

console.log(f); // Error: Cannot access 'f' before initialization
const f = 5;
Reasignación:

Las variables declaradas con const no pueden ser reasignadas. Sin embargo, si se trata de un objeto o un arreglo, sus propiedades o elementos pueden modificarse.

const g = 10;
// g = 15; // Error: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // Esto es permitido

*/

var numero = 10;
console.log(numero);

function foo(){
    numero = 20;

}

foo();
console.log(numero);

