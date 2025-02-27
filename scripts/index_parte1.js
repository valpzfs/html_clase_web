console.log("Hello world!");
const colores = ["red", "blue"];
console.log(colores[0]);
colores[0] = 513
console.log(colores[0]);
colores[2] = 8;
let alumno = {
    nombre :"Luis",
    edad: 20,
    imprime(){
        console.log(this.nombre + " " + this.edad);
    },
};

alumno.imprime();
alumno["edad"]++;

function fun2(){
    console.log("Hola 2");
}

fun2();

const funcion = (name) => {
    console.log("hola " + name)
};

funcion("Luis");