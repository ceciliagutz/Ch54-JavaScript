const desestructuracion = () =>{
    let a = 10;
    let b = 20;
    // pasar el valor de a -> b y el valor b -> a
    let temporal = a;
    b = a;
    a = temporal;
    
    // La desestructuración en JavaScript es una forma 
    // concisa de extraer valores de arrays o propiedades 
    // de objetos y asignarlos a variables.
    [b, a]= [a,b];

const gryffindor = ["Harry", "Ron", "Neville", "Hermione" , "Ginny"];
/* let protagonista;
let amigo;
let amiga; 

*/
    let protagonista;
    let amigo;
    let amiga;
    [protagonista, amigo, , amiga]= gryffindor;
/* protagonista = gryffindor [0];
amigo = gryffindor[1];
amiga = gryffindor[3]; 
 */

//desestructuración en objetos
  const hadSelector = {
        nombre: "Ces",
        color: "canela pasión",
        edad: 26,
        origen: "howards",
        isMagic: true,
        casas:{
            slytherin: "🐍Astutos y ambiviosos",
            hufflepuf: "🦡 Leales y trabajadores",
            revenclaw: "🦅Listos y curiosos",
            gryffindor: "🦁Valientes y atrevidos"
        }
    }
     //   {} = {};
     const {edad, nombre, origen:location}= hadSelector;

    /* const nombre= hadSelector.nombre;
    const edad = hadSelector.edad;
 */
console.log(nombre, edad, location);
//Obtener el valor de slytherin y asignarla a la variale myHouse
//const{casas} = hadSelector;
//console{slytherin:myHouse}=casas;

const{casas:{slytherin:myHouse}}=hadSelector;
console.log(myHouse);
};

desestructuracion();

const Footer = ({cohorte}) =>{

    return (
        <footer>
            <p>{cohorte} - 2025 </p>
            <em> Es leviosa es leviosaá </em>
        </footer>


    );


};
export {Footer};