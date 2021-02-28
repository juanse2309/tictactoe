// count vowels within a phrase
// contar vocales dentro de una frase
// Dada una frase, va retornar el número de ocurrencias de cada vocal
// Ejemplo
// INPUT: Hola Mundo
// OUTPUT: a:1, e:0, i:0, o:2, u:1 
// ó OUTPUT: hay 2 A, hay 0 e...etc..


const prompt = require('prompt-sync')(); //npm install prompt-sync
const input = prompt('Input a phrase ? ');
console.log(`you've entered: ${input}`)
counts = count(input);
// iterar sobre cada item de counts, y por cada uno imprimir el conteo

function count(input){
    // recibe un frase
    // retorna cuentas de vocales

    // 1. definir un objeto donde cada llave es una vocal, y el valor inicia en 0
    let counts = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0,
    }
    // 2.
    // iterar () sobre las letras de input
    // Iterar sobre hola es ir letra por letra
    //  iteración 0: h
    //  iteración 1: o
    //  iteración 2: l
    //  iteración 3: a
    // google: js como iterar un string
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

    // en cada iteración, se incrementa el conteo de 'counts' de la vocal encontrada.
    

    return counts;
}
