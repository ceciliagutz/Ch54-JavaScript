/* Objetivo:
Crear un formulario simple donde el usuario ingrese su edad en años y, al hacer clic en un botón se muestre su edad en meses.
Requisitos:
-Crear un input para que el usuario ingrese su edad (en años)
-Crear un botón "Calcular"
-Al hacer clic, mostrar un mensaje con la edad en meses
-Usar conversión explícita de string a número (parseInt o Number).

Resultado esperado:
Si el usuario ingresa 25 y presiona el botón, se muestra:
Tu edad en meses es: 300
const edad = document.getElementId(`birthdate`).value;

*/

// Este código se ejecuta cuando la página está lista
// Espera a que la página cargue completamente
document.addEventListener('DOMContentLoaded',
    function () {

        // Buscar el botón
        const boton = document.getElementById('calculate');

        // Escuchar cuando el botón es presionado
        boton.addEventListener('click', function () {
            // Obtener lo que el usuario escribió
            const texto = document.getElementById('birthdate').value;

            // Convertir eso a número
            const edad = parseInt(texto);

            // Verificar si es un número válido
                if (isNaN(edad) || edad < 0) {
                document.getElementById('result').textContent = "Lo sentimos, vuelve a ingresar tu edad.";
            }
                else {
                // Calcular edad en meses
                const meses = edad * 12;

                // Mostrar el resultado
                document.getElementById('result').textContent = "Tu edad en meses es: " + meses;
            }
        });

    });
