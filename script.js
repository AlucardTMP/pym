document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para el formulario interactivo
    const form = document.getElementById('evento-form');
    const resultadoDiv = document.getElementById('resultado-evento');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue

        const serviciosSeleccionados = [];
        const checkboxes = document.querySelectorAll('input[name="servicio"]:checked');
        
        checkboxes.forEach((checkbox) => {
            serviciosSeleccionados.push(checkbox.value);
        });

        if (serviciosSeleccionados.length > 0) {
            resultadoDiv.innerHTML = `¡Genial! Has seleccionado: <strong>${serviciosSeleccionados.join(' + ')}</strong>. Pronto te contactaremos. 🎉`;
        } else {
            resultadoDiv.innerHTML = 'Por favor, selecciona al menos un servicio para tu evento. 😊';
        }

        // Animación sutil para el resultado
        resultadoDiv.style.opacity = '0';
        setTimeout(() => {
            resultadoDiv.style.transition = 'opacity 0.5s ease';
            resultadoDiv.style.opacity = '1';
        }, 100);
    });

});
