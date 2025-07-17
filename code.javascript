document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
    } else {
        alert('Formulario enviado con éxito.');
        // Aquí puedes agregar la lógica para enviar el formulario
    }
});

document.getElementById('alertButton').addEventListener('click', function() {
    alert('¡Este es un mensaje de alerta personalizado!');
});
