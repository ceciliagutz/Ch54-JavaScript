console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
saludar("Ces")

function saludar(nombre){
  console.log("Que te gustaría de regalo de cumpleaños " + nombre);
}



/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function (nombre, regalo){
  console.log(`Felicidades ${nombre}, te traje ${regalo}`)
;
};

darRegalo("let","Doriesquites");

/* Realizar uns función declarada que sume dos números y retorne el resultado */

function sumar(a, b) {
  let suma = a + b;
return suma;
};
console.log(sumar(17,8));


/* Realizar uns función expresada que reste dos números y retorne el resultado */

const restarNumeros = function (num1, num2){
  console.log (`El resultado de restar es: ${ num1- num2}`);
};

restarNumeros(23,8);



/*

 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp(){
  console.log("Configuración inicial de la aplicación");
})();
//setUp();



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
 // Realizar una función declara que calcule el área de un triangulo
 //La función debe de retornar el resultado

 function calcularAreaTriangulo (base,altura){
  let area= base * altura/2 ; 
  return (base * altura ) / 2;
    console.log(`El area de un triangulo es: ${area(8,5)}`);
 }

 //Realizar una función expresada que calcule el área de un triángulo

 
/* const areaTriangulo = function (base, altura){
  return (base*altura) /2
  console.log(`El area del triangulo es: ${(b* altura) / 2}`)
;
}; */
const calculaArea2 = function (base, altura) {
  return (base*altura)/2;
}
console.log(`resultado usando funcion arrow: ${calculaArea2(12,20)}`)

//Realizar una función flecha que calcule el área de un triangulo

const calcularArea3 = (base, altura ) => base * altura / 2;
console.log(`resultado usando funcion arrow: ${calcularArea3(12,20)}`)


//Realizar una función flecha que calcule el área de un circulo
//Area = pi* radio^2
//Usar una función flecha para imprmir el resultado del parrafo id="area-circulo"

// Función flecha para calcular el área de un círculo

const circleArea = (radio) => Math.PI * radio ** 2;
const imprimirAreaCirculo = (radio) =>
  document.getElementById("area-circulo").innerText = circleArea(radio);
imprimirAreaCirculo(5);


/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const saludarPersona = (nombre = "persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`)

saludarPersona();
saludarPersona("Ceci");

console.log( parseInt("5"));
console.log( parseInt("1000"));
console.log( parseInt("1000",10));
console.log( parseInt("100000000"));
console.log( parseInt("D204D",16)); //13763629






/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
const imprimirMensaje = (fncCallBack ) => fncCallBack("Hola Ch54"); 
/* 18 ("Hola Ch54") */ 
/* Patito ("Hola Ch54") */
/* console.log("Hola-Ch54") */
//imprimirMensaje( 18); //fncCallBack is not a function
//imprimirMensaje("Patito"); //fncCallBack is not a function
imprimirMensaje ( console.log);
//imprimirMensaje ( console.log ("Ceci"));
//imprimirMensaje(undefinded); 


const enviarAParrafo = ( mensaje ) => {
  const saluda = "Hola, buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`;
};
imprimirMensaje( enviarAParrafo );

// usando la funcion imprimirMensaje enviar un callback para que imprima un con alert
imprimirMensaje(alert);

/* realizar una función que sume dos numeros y que imprima el resultado 
-inicialmente se imprimirá en la consola
-es posible que se te pida imprimir en el dom
- es posible que se te pida imprimir en un alert
*/
const sumarDosNumeros =(a,b) => a+b;
 const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 
const imprimirEnDOMParagraph = (mensaje) =>{
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
}
const imprimirEnDOMH2 = (mensaje) =>{
  const refParagraph = document.getElementById("resultadoH2-sumatoria");
  refParagraph.innerText = mensaje;
}
sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumarEImprimir( 10, 14, imprimirEnDOMH2); // se imprime en h2

// imprimir en alert
sumarEImprimir( 10, 14,alert);


/* const sumaEImprimir = (a, b) => {
  const resultado = sumarDosNumeros (a,b);
  const mensaje = `La suma de ${a}+ ${b} es: ${resultado}`;
 
  if(opcion === "consola") console.log(mensaje);
 else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText =mensaje;
  else if (opcion === "h2") document.getElementById("resultadoH2-sumatoria").innerText =mensaje;
  else alert(mensaje) */
 //imprime en la consola
  //console.log(mensaje);
  //document.getElementById("resultado-sumatoria").innerText = mensaje;
 // document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
/* }
 sumaEImprimir(10,14); //se imprime en consola
 sumaEImprimir(50,50); */ //se imprime en el parrafo
 

  // -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

//Calculando el factorial con recursividad
/* 
function factorialConRecursividad (numero){
  console.log(`Resolviendo el factorial de ${numero}`);
  if ( numero <=1) return 1;
  const result = factorialConRecursividad(numero -1 )* numero ;
  console.log (`el factorial de ${numero es ${result}}`);
  return result;
}
console.log(`Resultado final ${factorialConRecursividad(5)}`);//120 */

 /* 
 parámetro      recurisividad (n-1)     returnFnc
  5                 5-1 =4
  4                 4-1= 3              
  3                 3-1=2               3
  2                 2-1=1               1
 
 
 */

  /*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/
/* 
  function saludoConRecursividad( numeroSaludos){
  if(numeroSaludos <= 0) return numeroSaludos;
  const result = saludoConRecursividad(numeroSaludos - 1 ) ;
  console.log(`Saludo ${numeroSaludos}`);
  return result;
}
console.log(`Numero de saludo ${saludoConRecursividad(10)}`); */