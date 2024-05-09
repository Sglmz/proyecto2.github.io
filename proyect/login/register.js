document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  
    alert('Usuario creado con éxito');
    window.location.href = 'login.html';
  });
