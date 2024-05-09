
function verificarSesion() {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');

    if (!username && !password) {
        window.location.href = '../proyect/login/login.html';
    }
}

window.onload = function() {
    verificarSesion();
};

function cerrar() {
    window.location.href = '../proyect/login/login.html';
}
