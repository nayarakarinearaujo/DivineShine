/*
✅ Dois efeitos interativos JS/jQuery: 	
Ex: alternar tema, botão de scroll suave, alerta ao enviar formulário
? Ideias
* fazer scroll suave ?
* Envio de formulário com feedback
* Fazer a função que atualiza o ano no footer
*/

function enviarFormulario(event) {
  event.preventDefault();

  const inNome = document.getElementById("inNome");
  const inEmail = document.getElementById("inEmail");
  const inMensagem = document.getElementById("inMensagem");

  const nome = inNome.value.trim();
  const email = inEmail.value.trim();
  const mensagem = inMensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos!");
    inNome.focus();
    return;
  }

  console.log(nome); // Aqui você vê o nome no console
}

const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", enviarFormulario);
