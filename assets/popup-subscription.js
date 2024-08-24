document.addEventListener('DOMContentLoaded', function () {
    // Verifica si el pop-up ya ha sido mostrado
    if (!localStorage.getItem('popupShown')) {
        document.getElementById('popup-container').style.display = 'flex';
    }

    // Cerrar el pop-up cuando se haga clic en el botón de cerrar
    document.getElementById('popup-close').addEventListener('click', function () {
        document.getElementById('popup-container').style.display = 'none';
        // Marcar que el pop-up ha sido mostrado
        localStorage.setItem('popupShown', 'true');
    });

    // También cerrar el pop-up si se hace clic fuera del contenido
    document.getElementById('popup-container').addEventListener('click', function (event) {
        if (event.target == document.getElementById('popup-container')) {
            document.getElementById('popup-container').style.display = 'none';
            // Marcar que el pop-up ha sido mostrado
            localStorage.setItem('popupShown', 'true');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mc-embedded-subscribe-form');
    const resultDiv = document.getElementById('subscribe-result');
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        const email = document.getElementById('mce-EMAIL').value;

        if (!email) {
            resultDiv.innerHTML = 'Por favor ingrese un correo electrónico válido.';
            return;
        }

        try {
            const response = await fetch('https://a01aoifhdi.execute-api.us-east-1.amazonaws.com/prod/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                resultDiv.innerHTML = '¡Gracias por suscribirte!';
            } else {
                resultDiv.innerHTML = `Error: ${data.detail || 'Hubo un problema al procesar tu solicitud.'}`;
            }
        } catch (error) {
            resultDiv.innerHTML = `Error: ${error.message}`;
        }
    });
});
