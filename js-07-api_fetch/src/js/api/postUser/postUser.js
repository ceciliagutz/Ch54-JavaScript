const postUser = async(user)=>{
// Para el método POST, PUT y DELETE se debe configurar el objeto de configuracion del método fetch

const options ={
   method: "POST", //Método HTTP: POST, PUT, DELETE, GET
   Headers:{
    "Content-Type": "application/json" // Tipo de contenido
   },
   body: JSON.stringify(user) //Cuerpo de la petición
}

const response = await fetch (URL, options);
console.log("Respuesta del seridor", response);
if(!response.ok || response.status !==201){
    //Si la respuesta no es correcta, lanzar un error
    throw new Error (`Error al enviar el usuario: ${response.statusText}`);
}

}

export{postUser};