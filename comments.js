const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('btn');
const toggleBtn = document.getElementById('toggle-user');

let isMe = true; // true = я, false = другой пользователь

sendBtn.addEventListener('click', sendMessage);
toggleBtn.addEventListener('click', () => {
  isMe = !isMe;
  toggleBtn.textContent = isMe ? '👤 Я' : '👤 Др';
});
chatInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const text = chatInput.value.trim();
  if (text === '') return;

  const messageBlock = document.createElement('div');
  messageBlock.classList.add('comment');

  if (!isMe) {
    messageBlock.classList.add('other');
    messageBlock.style.alignSelf = 'flex-start';
  } else {
    messageBlock.classList.add('me');
    messageBlock.style.alignSelf = 'flex-end';
  }

  messageBlock.innerText = text;

  chatWindow.appendChild(messageBlock);

  chatInput.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
