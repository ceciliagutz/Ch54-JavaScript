import { insertMainHeader as menu } from "../../modules/header/header.js";
import { insertMainFooter  } from "../../modules/footer/footer.js";
import { ejecutarObjetos } from "./objeto.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { isUserValid } from "../../js/validations/isUserValid.js";
import { postUser } from "../../js/api/postUser/postUser.js";


menu( document.getElementById("header") );
insertMainFooter (document.getElementById("footer"));
ejecutarObjetos();

const registerForm = document.getElementById("contactForm");


registerForm.addEventListener( "submit" , async ( e )=>{
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");
    // console.log( e );
    
    // Obtener los dtos del formulario.

    const newUser = leerInputsFormulario(registerForm);
    const validateUser = isUserValid(newUser);
    if (validateUser.isValid){
try {
            const response = await postUser("https://reqres.in/api/users", newUser ); 
            alert("Formulario enviado correctamente " + response.createdAt);           
        } catch (error) {
            alert("Error al enviar el formulario: " + error.message);
        }
       
    } else{ 
        alert(validateUser.errors.join("\n"));
    }
    
    

    // Validar los datos
    // Si los datos son válidos enviar el formulario
     // - Usando la api fetch al servidor, con el método POST enviar el formulario
    
    // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
    // = Enviar al usuario el error del servidor
    // Si los datos no son válidos enviar un mensaje al usuario
} );

// Obtener los dtos del formulario.
    // Validar los datos
    // Si los datos son válidos enviar el formulario
        // - Usando la api fetch al servidor, con el método POST enviar el formulario
           // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
           // = Enviar al usuario el error del servidor
    // Si los datos no son válidos enviar un mensaje al usuario