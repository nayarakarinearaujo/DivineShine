// Atualiza o ano no rodapé (footer) automaticamente para o ano atual
const currentYear = document.getElementById("footer");
currentYear.innerHTML = `&copy; ${new Date().getFullYear()} Divine Shine - Todos os direitos reservados`;

// Função para tratar o envio do formulário
function enviarFormulario(event) {
  // Evita que o formulário seja enviado e a página recarregue
  event.preventDefault();

  // Pega os elementos dos campos do formulário pelo id
  const inNome = document.getElementById("inNome");
  const inEmail = document.getElementById("inEmail");
  const inMensagem = document.getElementById("inMensagem");
  const feedback = document.getElementById("mensagemFeedback");

  // Pega os valores digitados, removendo espaços no começo e no fim
  const nome = inNome.value.trim();
  const email = inEmail.value.trim();
  const mensagem = inMensagem.value.trim();

  // Verifica se algum campo está vazio
  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!"); // Mostra alerta para preencher tudo
    inNome.focus(); // Coloca o cursor no campo nome para facilitar a correção
    return; // Sai da função, não continua
  }

  // Se todos os campos estiverem preenchidos, mostra mensagem de sucesso
  feedback.textContent = "Mensagem enviada com sucesso!";
  feedback.classList.add("visible"); // Adiciona classe para mostrar a mensagem

  // Depois de 3 segundos, remove a mensagem de feedback
  setTimeout(() => {
    feedback.classList.remove("visible");
  }, 3000);

  // Limpa os campos do formulário para que fique vazio para novo envio
  inNome.value = "";
  inEmail.value = "";
  inMensagem.value = "";
}

// Seleciona o botão de enviar pelo id
const btnEnviar = document.getElementById("btnEnviar");

// Adiciona um "escutador" que executa a função enviarFormulario quando o botão for clicado
btnEnviar.addEventListener("click", enviarFormulario);
