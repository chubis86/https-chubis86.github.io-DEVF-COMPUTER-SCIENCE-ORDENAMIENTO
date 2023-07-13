////////////////////////////////////////////////////
console.log("///////////////////////////////////////");
console.log("1.- Crea una función que ordene de forma descendente un arreglo de números.");
const arregloE1=[9,3,1,6,5,88,-1,2,7];

function ordenDescendente(arreglo){
    let temporal=0;
    for(let i=0; i<arreglo.length;i++){
        for(let x=0;x<arreglo.length-1; x++){
            if(arreglo[x]<arreglo[x+1]){
                temporal=arreglo[x];
                arreglo[x]=arreglo[x+1];
                arreglo[x+1]=temporal;
            }
        }
    }
}
ordenDescendente(arregloE1);
console.log("Arreglo ordenado: ");
console.log(arregloE1);


//////////////////////////////////////////////////////
console.log("///////////////////////////////////////");
console.log("2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com");
const arregloE2=['b','h','w','e','a'];

function ordenarE2(arreglo){
    arreglo.sort();
}

ordenarE2(arregloE2);
console.log("Arreglo ordenado: ");
console.log(arregloE2);

//////////////////////////////////////////////////////////////////
console.log("///////////////////////////////////////");
console.log("3.- Crear una clase Alumno con los siguientes datos:");
console.log("Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.");
console.log("Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.");

class Alumno{
    constructor(nombre, c1,c2,c3,c4,c5){
        this.nombre=nombre;
        this.c1=c1;
        this.c2=c2;
        this.c3=c3;
        this.c4=c4;
        this.c5=c5;
        this.promedio=0;

    }

    promedioCalcular(){
        this.promedio = (this.c1+this.c2+this.c3+this.c4+this.c5)/5;
    }
}

class Salon{
    arregloSalon=[];

    ordenar(){
        let temporal;
        for(let i=0; i<this.arregloSalon.length;i++){
            for(let x=0;x<this.arregloSalon.length-1; x++){
                if(this.arregloSalon[x].promedio<this.arregloSalon[x+1].promedio){
                    temporal=this.arregloSalon[x];
                    this.arregloSalon[x]=this.arregloSalon[x+1];
                    this.arregloSalon[x+1]=temporal;
                }
            }
        }
    }

}

let alumno1= new Alumno("A1", 3,4,5,6,7);
let alumno2= new Alumno("A2", 9,9,9,9,9);
let alumno3= new Alumno("A3", 8,8,8,8,8);
alumno1.promedioCalcular();
alumno2.promedioCalcular();
alumno3.promedioCalcular();
let salon= new Salon();
salon.arregloSalon.push(alumno1);
salon.arregloSalon.push(alumno2);
salon.arregloSalon.push(alumno3);
salon.ordenar();
console.log(salon.arregloSalon);

//////////////////////////////////////////////////////////////
console.log("///////////////////////////////////////");
console.log("4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.");
const arregloE4=['adios','hola','maximo','uno','despedida'];
console.log("Arreglo sin ordenar");
console.log(arregloE4);
function ordenarE4(arreglo){
    let temporal="";
    for(let i=0; i<arreglo.length;i++){
        for(let x=0;x<arreglo.length-1; x++){
            if(arreglo[x].length>arreglo[x+1].length){
                temporal=arreglo[x];
                arreglo[x]=arreglo[x+1];
                arreglo[x+1]=temporal;
            }
        }
    }   
}
ordenarE4(arregloE4);
console.log("Arreglo ordenado:");
console.log(arregloE4);

//////////////////////////////////////////////////////////////
console.log("///////////////////////////////////////");
console.log("5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.");
const arregloE5=[[7,3],[2,2],[1,0],[4,3]];
console.log("El arreglo original:");
console.log(arregloE5);
//Primero calculamos las distancias
//d=raiz(x2+y2)
function ordenarE5(arreglo){
    let distancia=0;
    for(let x=0; x<arregloE5.length;x++){
        distancia=Math.sqrt(Math.pow(arregloE5[x][0], 2)+Math.pow(arregloE5[x][1], 2));
        arregloE5[x][2]=distancia;
    }

    for(let x=0;x<arreglo.length-1; x++){
        if(arreglo[x][2]<arreglo[x+1][2]){
            temporal=arreglo[x];
            arreglo[x]=arreglo[x+1];
            arreglo[x+1]=temporal;
        }
    }

}

ordenarE5(arregloE5);
console.log("El arreglo ordenado es");
console.log(arregloE5);