document.addEventListener("DOMContentLoaded", function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var listaPedidos = document.getElementById('lista-pedidos');


    function eliminarItem(index) {
        cartItems.splice(index, 1); 
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
        renderizarLista();
    }

    function renderizarLista() {
        listaPedidos.innerHTML = '';


        cartItems.forEach(function(item, index) {
            var li = document.createElement('li');
            li.textContent = item.name + ' - $' + item.value.toFixed(2);
            li.classList.add('lista-item');

            var btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.classList.add('eliminar-btn');
            btnEliminar.addEventListener('click', function() {
                eliminarItem(index);
            });

            li.appendChild(btnEliminar);
            listaPedidos.appendChild(li);
        });
    }

    renderizarLista();
});