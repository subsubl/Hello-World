document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');
  btn.addEventListener('click', () => {
    msg.textContent = '👋 Hello from Spixi Mini App!';
  });
});
