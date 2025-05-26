const leerInputsFormulario = ( formulario )=>{
    const newUser = {
        name : formulario.elements["name"].value,
        last: formulario.elements ["last-name"].value,
        email : formulario.elements["email"].value,
        password: formulario.elements["new-password"].value,
        bday: formulario.elements["bday"].value,
        checkbox: formulario.elements["terminos-condiciones"].checked
    }
    console.table(newUser);
    return newUser;
}
export { leerInputsFormulario };