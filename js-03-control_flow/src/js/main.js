/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/


/* 
    Crear un arrow function que reciba el valor de edad.
    Si la edad es mayor o igual a 18, la función debe retornar el mensaje "Eres mayor de edad."
    En caso contrario, retornar el mensaje "Eres menor de edad."
    -Realizar la version de if-else sin usar el bloque de codigo{} 

*/
/* 
const confirmarEdad = edad => 
  edad >= 18 ? console.log("Eres mayor de edad.") : console.log("Eres menor de edad.");

confirmarEdad(19); */

const confirmarEdad = edad => {
  if (edad >= 18) return "Eres mayor de edad.";
  else return "Eres menor de edad.";
}
const resultado = confirmarEdad (15);
console.log(resultado);


/* 
    Crear un arrow funcion que reciba el valor de edad.
    Si la edad es mayor o igual a 18 y menor o igual a 30 la funcion debe retornar el mensaje "Tu luchador era la Parka"
    Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo"

    Si es menor a 18 el mensaje "Tu luchador es Penta"
*/



const confirmarEdadLuchador = edad => {
  if (edad >= 18 && edad <= 30) return "Tu luchador es la Parka.";
  else if (edad >=31) return "Tu luchador es el Perro aguayo";
  else return "Tu luchador es Penta";
}

const luchador = confirmarEdadLuchador(23);
console.log(luchador); 


//Bloque de codigo es una llave de apertura("{") y de cierre("}")

//let es una variable que se puede reasignar, mientras que const es una variable constante que no se puede modificar 
// BlockScope es alcance de bloque, 

//BLOQUE DE CÓDIGO

{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar) //30, 40, 50
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar) // 100,110, 120
    }
    console.log(myVarLet, myVarConst, myVarVar) //30, 40, 120
}



// Ejercicios mentales
let active = false
if( active === true ); {
  console.log("Está activo")
}
console.log("Fin del programa");


// --------------Ejercicio 2-----------------
active = false;
if( active )
  console.log("Está activo");
  console.log("Tiene autorización");
console.log("Fin del programa");


// --------------Ejercicio 3-----------------
active = false;
if( active ); console.log("Está activo");
//else console.log("No está activo"); // Unexpected token 'else'
// console.log("Fin del programa");

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego": 
        case "Besito":
        case "Fijól":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado ="No se sabe de quién es";        
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril
console.log( evaluarNombre("Milo") ); // Es de Carlos
console.log( evaluarNombre("Borrego") ); // Es de Jessica

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 * 
 * 
 * Realizar dos versiones, con switch y con if-else
 */

// Versión con switch
const velocidad  = ( number ) => {
    let resultado;
    switch ( number){
        case 0:
            resultado = "Apagado";
            break;
        case 1:
            resultado = "Baja";
            break;
        case 2:
            resultado = "Media";
            break;
        case 3:
            resultado = "Alta";
            break;
 }
    return resultado;
}
console.log( velocidad(0));
console.log( velocidad(1));
console.log( velocidad(2));
console.log( velocidad(3));

//Versión con If-else


const estadoVelocidad = numero => {
  if (numero = 0 ) return "Apagado.";
  else if (numero =1) return "Baja";
  else if (numero =2) return "Media";
  else if (numero =3) return "Alta";
  else return "Velocidad no valida";
}

const velo = estadoVelocidad(0);
console.log(velo); 








// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/




/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/
