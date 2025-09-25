// Script.js

// Obtenemos los elementos del DOM
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

// Función para agregar un mensaje al chat
function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = `${sender}: ${message}`;
  chatMessages.appendChild(messageElement);
}

// Evento click del botón de enviar
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    addMessage(message, 'Usuario');
    messageInput.value = '';
  }
});
