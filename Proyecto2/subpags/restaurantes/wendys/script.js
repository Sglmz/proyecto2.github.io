$(document).ready(function(){
    $('.botonsito').click(function(e){
        e.preventDefault(); // Evitar el comportamiento predeterminado del botón
        var value = parseFloat($(this).val()); // Convertir el valor a un número
        var name = $(this).data('name'); // Obtener el nombre del botón
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Obtener los elementos del carrito desde el almacenamiento local
        cartItems.push({name: name, value: value}); // Agregar el elemento actual al carrito
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Guardar los elementos del carrito actualizados en el almacenamiento local
        alert('Se añadió ' + name + ' al carrito.'); // Mostrar un mensaje de confirmación
    });
});