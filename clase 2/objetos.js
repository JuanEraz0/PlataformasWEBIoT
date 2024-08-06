
const Juan = {
    nombre: "Juan",
    apellido: "Erazo",
    edad: 26,
    peso: 80,
    altura: 178,

    programar: function() {
        return "Tick tick ";
    },
    presentarse: function(){
        console.log(`Mi nombre es: ${this.nombre} ${this.apellido}, tengo: ${this.edad} anios, peso: ${this.peso} y mido: ${this.altura}`);
    }
};

console.log(Juan.nombre);

yo = Juan; // creacion de objeto yo del tipo Juan

console.log(`Mi nombre es: ${yo.nombre} ${yo.apellido}`);
console.log(yo.programar());

yo.presentarse();