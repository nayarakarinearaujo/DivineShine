document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', (e) => {
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (!nome || !email || !mensagem) {
        e.preventDefault();
        alert('Por favor, preencha todos os campos!');
      }
    });
  }

  // const main = document.querySelector('main');
  // if (main) {
  //   main.addEventListener('click', () => {
  //     main.style.backgroundColor = '#f4f4f4';
  //   });
  // }
});