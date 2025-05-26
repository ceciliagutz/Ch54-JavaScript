

const validateName = (name) =>{
const result ={
    isValid: true,
    errors :[]
};
    if (name === "" ){
        result.isValid = false;
        result.errors.push("El nombre no debe de estar vacío");
    } else if (name.length <3){
        result.isValid = false;
        result.errors.push("El nombre debe tener al menors 3 caracteres");
    }
    return result;
}
export {validateName};