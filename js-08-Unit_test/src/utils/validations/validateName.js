const validateName = (name) => {
  const result = {
    isValid: true,
    errors: [],
  };
  //Validar que el valor sea un string

  if (typeof name !== "string") {
    result.isValid = false;
    result.errors.push("El valor ingresado no es un nombre válido");
    return result;
  } 
  //Validar que el valor no sean solo espacios
  const nameSinEspacios = name.trim();
  if (nameSinEspacios === ""){
    result.isValid = false;
    result.errors.push("No se permiten espacios en el nombre")
  }
  //Validar los caracteres
  if (nameSinEspacios.length <3){
    result.isValid = false;
    result.errors.push("El nombre debe tener más de dos caracteres");

  }

  
   return result;
  
};


export {validateName};
