
const validateLastName = (last) =>{
const result ={
    isValid: true,
    errors :[]
};
    if (last === "" ){
        result.isValid = false;
        result.errors.push("El apellido no debe de estar vacío");
    } else if (last.length <3){
        result.isValid = false;
        result.errors.push("El apellido debe tener al menos 3 caracteres");
    }
    return result;
}
export {validateLastName};