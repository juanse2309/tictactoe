/******** VARIABLES

Sirven para almacenar el valor de algo
ejemplo la variable x puede tomar el valor 3
esto se representa así: x=3
la variable puede cambiar de valor depués, por ejemplo x=5

Diferentes formas de definir una variable (por ejemplo x):
1) Usando var
    a) var x; //x está definida, pero su valor es undefined
    b) var x=1; //x está definida y su valor es 1

    Puede cambiar el valor de x, por ejemplo:
    x=2;
    x=3;
    Es decir, son variables que permiten lectura y escritura
    
2) Usando let
    a) let x;
    b) let x=1;

    Puede cambiar el valor de x, por ejemplo:
    x=2;
    x=3;
    ...
    Es decir, son variables que permiten lectura y escritura


3) Usando const
    a) const x; //esto no funciona, le da un error
    b) const x=1; //define x y su valor es 1
    
    No puede cambiar el valor
    x=3 //-> le da un error
    Es decir, son variables que solo permiten escritura!



4) Asignando un valor
    a) x=1; //si x no está definida, Js asume que ud quizo decir var x=1;

****/
/**** LOS VALORES QUE PUEDE TOMAR UNA VARIABLE 
Tipos de valores: 
- Números:
    - int (integer o entero) ejemplo: 1,2,3,-1,-2, 1000, 2000
    - float (flotante o numero con decimales): 3.3, 2.1, 2.0, -3.3
    - long (intero muy grande): 1000023000230023
    Ejemplos reales:
        var x = 2.3;
        var y = -2.123453;

    - boolean (binarios)

- Texto (strings: cadenas de caracteres). Se definen como secuencias de letras encerredas en comillas (dobles on sencillas):
    Ejemplos:
        var x = "hola mundo";
        var y = 'hola mundo';

        var z = 'quiero mostrar comillas (") ';

- Arreglo (array, en otros lenguajes es similar a una lista)
    Una lista, o secuencia de valores (numeros, objetos, arreglos)
    var x = [1,2,3];
    var y = ["hola", "mundo", "dentro", "de un arreglo"];
    var z = [1, "mundo", 2.3, 4, 6, "adios"];
    var w = [1, "mundo", 2.3, 4, [7,8,9], "adios"];
    acceder:
        x[2] // -> 3
        z[3] // -> 4
        w[4] // -> [7,8,9]
        w[10] //

- Objeto (object) (key value pair (pareja llave valor), hash, dictionario)
    - Le permite asociar valores con nombres, por ejemplo
    var x = {"a":1, "b":2}  //El nombre a dentro del objeto x tiene el valor 1
    var y = {"a":1, "b":"hola"}  //El nombre a dentro del objeto x tiene el valor 1
    var w = {"a":1, "b":"hola", "c": {"k":1, "z":2, "a":2}}  //El nombre a dentro del objeto x tiene el valor 1

- undefined
- null
- 


- functions (funciones) 
- classes (clases) 

 
  
*****/



// Alcance de las variables (scope)
// - var is function scoped 
// - let is block scoped.







// funciones


// 

console.log("inicio de aplication ")

let x = 1

function click_en_celda(event){
    console.log("click en celda", event)
}
function foo(){ //definicion de foo
    console.log("foo ha sido llamado")

}
var foo = function() { //otra forma de definir foo

}

foo() //ejecucion de foo

var unNumero = 1

var foo = function(){console.log("funcion foo del objeto unObjeto")}

var unObjeto = {
    x: 1,
    y: 3,
    myfunc: function(){console.log("funcion stop dentro del objeto unObjeto")},

}

var unObjeto = {
    x: 1,
    y: 3,
    mi_funcion: function () {console.log("hola")}

}
unObjeto.x = 3
unObjeto.y = 4

// let celdas = document.querySelectorAll(".cell");
unObjeto.myfunc() //ejecutando la funcion myfunc dentro del objeto unObjet
document.querySelectorAll();//ejecutando la funcion queryselector dentro del objeto document
//

foo(celdas[0])
foo(celdas[3])
foo(celdas[2])
foo(celdas[1])


for(var i=0; i < celdas.length; i++){
    foo(celdas[i])
}
function my_callback(celda){
    foo(celda)
}

celdas.forEach(celda => {
    
})

function foo(x) {
    console.log(x)
}

// foo = (x) => console.log(x)
elements.forEach((x) => {
    console.log(x)
    console.error(x)
}
)



var x=0;
while(true){
    foo()
    if (x > celdas.length){
        break
    }
    x++;
}
// EventTarget.

// target.addEventlister()
//var variables de bloque
//let variables globales, el cual va a cambiar
//const de variables, tiene objetos y arreglos: const PI= 3.1416;
//                                                    console.log(PI)
// 