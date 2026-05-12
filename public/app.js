const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const status = document.createElement('div');
  status.setAttribute('role', 'status');
  status.textContent = 'Inscrição confirmada!';

  document.body.appendChild(status);
});
