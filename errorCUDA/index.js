function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('Archivo seleccionado:', file.name);
        // Aquí puedes agregar lógica adicional para procesar el archivo de audio.
    }
}
function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        console.log('Archivo seleccionado:', file.name);

        // Habilitar el botón de extracción

        const extractButton = document.getElementById('extractButton');
        extractButton.disabled = false; // Habilitar el botón
        extractButton.classList.remove('btn-outline-primary'); // Remover la clase de contorno
        extractButton.classList.add('btn-primary'); // Agregar la clase de botón primario
    }
}

// Mostrar la barra de progreso al hacer clic en el botón
document.getElementById('extractButton').addEventListener('click', function () {
    extractButton.disabled = true; // Deshabilitar el botón
    extractButton.classList.remove('btn-primary'); // Remover la clase de botón primario
    extractButton.classList.add('btn-outline-primary'); // Agregar la clase contorno
    const selectorButton = document.getElementById('selectorButton');
    selectorButton.disabled = true;

    showDangerAlert(dangerAlert); // Mostrar la alerta de error
    changeSelectorButton(); // Cambiar el texto y función del botón


    function showDangerAlert(alertElement) {
        alertElement.style.display = 'block'; // Asegúrate de que esté visible
        alertElement.style.opacity = 0; // Comienza con opacidad 0

        // Usar setTimeout para permitir que el navegador procese el cambio
        setTimeout(() => {
            alertElement.style.transition = 'opacity 0.7s ease'; // Establecer la transición
            alertElement.style.opacity = 1; // Cambiar opacidad a 1
        }, 10); // Breve pausa para que el navegador registre el cambio de estilo
    }

    function changeSelectorButton() {
        const selectorButton = document.getElementById('selectorButton');
        selectorButton.disabled = false;
        selectorButton.textContent = "Intentar Otra Extracción"; // Cambiar el texto del botón
        selectorButton.onclick = function () {
            location.reload(); // Recargar la página al hacer clic
        };
    }


});