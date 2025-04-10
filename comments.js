const chatWindow = document.getElementById('comment');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('btn');

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const text = chatInput.value.trim();
  if (text === '') return;

  const commentBlock = document.createElement('div');
  commentBlock.className = 'comment';

  const message = document.createElement('div');
  message.className = 'chat-message';
  message.innerText = text;

  commentBlock.appendChild(message);
  chatWindow.appendChild(commentBlock);

  chatInput.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
