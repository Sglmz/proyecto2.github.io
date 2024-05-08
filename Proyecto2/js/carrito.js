document.addEventListener("DOMContentLoaded", function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtener los elementos del carrito desde el almacenamiento local
    var listaPedidos = document.getElementById('lista-pedidos');

    // Función para eliminar un elemento del carrito
    function eliminarItem(index) {
        cartItems.splice(index, 1); // Eliminar el elemento del carrito
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Guardar los elementos del carrito actualizados en el almacenamiento local
        renderizarLista(); // Volver a renderizar la lista de pedidos
    }

    // Función para renderizar la lista de pedidos
    function renderizarLista() {
        listaPedidos.innerHTML = ''; // Limpiar la lista de pedidos

        // Iterar sobre los elementos del carrito y agregarlos a la lista
        cartItems.forEach(function(item, index) {
            var li = document.createElement('li');
            li.textContent = item.name + ' - $' + item.value.toFixed(2);
            li.classList.add('lista-item'); // Agregar clase de estilo para los elementos de la lista

            // Agregar botón de eliminación
            var btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.classList.add('eliminar-btn'); // Agregar la clase de estilo al botón
            btnEliminar.addEventListener('click', function() {
                eliminarItem(index); // Llamar a la función para eliminar el elemento del carrito cuando se hace clic en el botón
            });

            li.appendChild(btnEliminar); // Agregar botón de eliminación al elemento de la lista
            listaPedidos.appendChild(li);
        });
    }

    renderizarLista(); // Llamar a la función para renderizar la lista de pedidos al cargar la página
});