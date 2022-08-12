"use strict";
/* let text:string = "Hello World!";
console.log(text); */
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, anio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNac = anio;
    }
    Persona.prototype.toString = function () {
        return this.nombre + " " + this.apellido;
    };
    Persona.prototype.edad = function (añoActual) {
        return (añoActual - this.anioNac);
    };
    Object.defineProperty(Persona.prototype, "anio", {
        set: function (anio) {
            this.anioNac = anio;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
var persona01 = new Persona("Pablo", "Alonzo", 15);
/* persona1.nombre = Pablo;
persona1.apellido = Alonso;
persona1.anio = 15; */
console.log(persona01.toString());
