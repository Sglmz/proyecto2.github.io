document.addEventListener("DOMContentLoaded", function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var totalLabel = document.getElementById('total-label');

    function calcularTotal() {
        var total = cartItems.reduce(function(acc, item) {
            return acc + item.value;
        }, 0);
        return total.toFixed(2);
    }

    function actualizarTotalLabel() {
        var total = calcularTotal();
        totalLabel.textContent = 'Cantidad Total: $' + total;
    }
    actualizarTotalLabel();
});
