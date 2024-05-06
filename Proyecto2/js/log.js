
function verificarSesion() {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');

    if (!username && !password) {
        window.location.href = 'https://sglmz.github.io/proyecto2.github.io/Proyecto2/login/login.html';
    }
}

window.onload = function() {
    verificarSesion();
};

function cerrar() {
    window.location.href = 'https://sglmz.github.io/proyecto2.github.io/Proyecto2/login/login.html';
}
