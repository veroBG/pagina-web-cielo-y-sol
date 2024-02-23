// Obtener todos los elementos con la clase "productos"
const productos = document.querySelectorAll('.productos li');

// Iterar sobre cada producto y agregar manejadores de eventos
productos.forEach(producto => {
    // Manejador de evento para cuando se pasa el mouse sobre el producto
    producto.addEventListener('mouseover', () => {
        producto.style.borderColor = 'orange';
    });

    // Manejador de evento para cuando se hace clic en el producto
    producto.addEventListener('click', () => {
        if (producto.style.borderColor === 'orange') {
            producto.style.borderColor = 'green';
        } else {
            producto.style.borderColor = 'orange';
        }
    });
});

