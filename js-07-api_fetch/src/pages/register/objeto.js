const myArray = [1, 2, 3, 4];
const unionArray = myArray.join(" - "); // 1 - 2 -3 - 4 
myArray.push(5, 6, 7, 8);
const arrayData = myArray[3]; // 4

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
}



const myobjt = {
    key: "valor",
    name: "CeciNeo",
    firstName: "GtzUrban",
    email: "ceciliagutierrez@matrix.com",
    password: "despertar$",
    birthdate: "2001-11-11",
    isActive: true,
    hobbies: ["Despertar personas", "verdades incómodas", "Comer pure"],
    favoritos: {
        bebidas: ["agua", "pozol", "agua de tamarindo"],
        comidas: ["pozole", "Tacos de suadero"]
    },
    saludar : function myFunction( persona ){
        return`Hola${persona}`;
    }
};

const ejecutarObjetos = ()=>{

//Leer datos del objeto
const nombrePersona = myobjt.name; // CeciNeo
const favoritos = myobjt.favoritos.bebidas; // ["agua", "pozol", "agua de tamarindo"]

const segundaBebida = favoritos[1]; // "pozol"

const terceraBebida = myobjt.favoritos.bebidas[2];

//Acceder al atributo firstname

const firstName = myobjt.firstName; // "GtzUrban"

/* 
Soporta nombres con espacio, simbolo o dinámicos
Clave fija y válida                             obj.propiedad
Clave dinámica o con caracteres especiales      obj.["clave"]
*/
const primerNombre = myobjt["firstName"] //"GtzUrban"

const mensaje = myobjt.saludar("Daniela");
console.log(mensaje);

// ---------------Optional Chaining--------------------
//Sirve para acceder a propiedades de objetos de forma segura, evitando errores si una propiedad intermedia no existe

//const primeraComida = myobjt.favorittos.alimentos; //undefined porque no existe el atributo alimentos
//const primeraComida = myobjt.favoritos.alimentos; // cannot read properties of undefined
const primeraComida = myobjt?.favoritos?.alimentos; //undefined

//iterar un objeto
//for in itera sobre los atributos de un objeto
for (let clave in myobjt){
    console.log(clave,myobjt[clave]);
}


}
export {ejecutarObjetos};

