
//Atualiza o ano do footer
const currentYear = document.getElementById("footer");
currentYear.innerHTML = `&copy; ${new Date().getFullYear()} Divine Shine - Todos os direitos reservados`;

function enviarFormulario(event) {
  event.preventDefault();

  const inNome = document.getElementById("inNome");
  const inEmail = document.getElementById("inEmail");
  const inMensagem = document.getElementById("inMensagem");
  const feedback = document.getElementById("mensagemFeedback");

  //Pega os valores digitados no campo
  const nome = inNome.value.trim();
  const email = inEmail.value.trim();
  const mensagem = inMensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    inNome.focus();
    return;
  }

  // Exibe o feedback
  feedback.textContent = "Mensagem enviada com sucesso!";
  feedback.classList.add("visible");

  setTimeout(() => {
    feedback.classList.remove("visible");
  }, 3000);

  // Limpa os campos do formulário
  inNome.value = "";
  inEmail.value = "";
  inMensagem.value = "";
}

const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", enviarFormulario);
