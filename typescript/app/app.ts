/* let text:string = "Hello World!";
console.log(text); */

class Persona{
    readonly nombre:string;
    readonly apellido:string;
    private anioNac:number;

    constructor(nombre:string,apellido:string,anio:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.anioNac=anio;
    }

    public toString():string{
        return `${this.nombre} ${this.apellido}`;
    }
    
    public edad(añoActual:number):number{
        return(añoActual-this.anioNac);
    }

    set anio(anio:number){
        this.anioNac = anio;
    }
}

let persona01= new Persona("Pablo", "Alonzo", 15);
/* persona1.nombre = Pablo;
persona1.apellido = Alonso;
persona1.anio = 15; */

console.log(persona01.toString());


