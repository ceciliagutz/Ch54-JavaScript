/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón
*/


const irPorElote =( horaDelDia ) =>{

    //const miPromesa = new Promise( fnCallBack );
    const miPromesa = new Promise ( ( fnCallBackResolve, fnCallBackReject )=>{
        console.log("Voy por el elote en la "+ horaDelDia); //esta tarea puede demorar mucho o poco
        if ( horaDelDia ==="día" || horaDelDia ==="tarde" ){
            fnCallBackResolve("Toma tu elote que está dentro de una bolsa");
        } else {
            fnCallBackReject( {error:404, descripcion: "Elote no fue encontrado"});
        }

    });
    return miPromesa;
}

/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */

const vueltasParaAbrir =(number) =>{
    const miPromesaVueltas= new Promise((fnCallBackResolve, fnCallBackReject)=>{
        console.log(`Tu número de vueltas es ${number}` );
        if(number <=2 ){
            fnCallBackResolve("ñomi ñomi, me como mi elote");
        } else {
            fnCallBackReject("ups, se me cayo tu elote");
        }

    });
    return miPromesaVueltas;
}

/* vueltasParaAbrir("1")
    .then((Response) => console.log("resultado", Response));

    vueltasParaAbrir("5")
    .then((Response) => console.log("resultado", Response))
    .catch((error)=> console.log(`Promesa rechazada`,error)); */




//miFuncionPromesa().then(callBack).catch(callback).finally(callback);
/* irPorElote("día")
    .then((Response) => console.log("resultado", Response));

    irPorElote("noche")
    .then((Response) => console.log("resultado", Response))
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")); */


//Ya tengo mi elote, pero falta abrir la bolsa
const tiempo = "día"
irPorElote(tiempo)
    .then( (Response) => {
        console.log("Promesa", tiempo,  Response);
        const vueltas = 2;
        vueltasParaAbrir(vueltas)
        .then( Response => console.log(tiempo, Response))
        .catch(error => console.log (error));
    })
    .catch((error) =>console.log(`Promesa rechazada`, error))
    .finally (() => console.log("Se ha terminado tu promesa"));