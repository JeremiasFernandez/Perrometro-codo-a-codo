document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('login-form');
    var errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var username = document.getElementById('Usuario').value;
      var password = document.getElementById('Contraseña').value;
  
      if (username === 'admin' && password === 'admin123') {
        window.location.href = 'C:\Users\User\Documents\Programacion\Tp grupal solo\Html\index.html';
      } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
      }
    });
  });