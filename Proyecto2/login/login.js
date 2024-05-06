document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
      alert('Bienvenido, '+username+'!');
      window.location.href = '../index.html';
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  });