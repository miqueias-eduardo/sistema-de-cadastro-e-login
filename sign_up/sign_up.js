import * as modal from "../modal/modal.js";

//inserindo o modal no html
fetch("../modal/modal.html")
.then(res => res.text())
.then(mod => {
    document.body.insertAdjacentHTML(
        "afterbegin", mod
    );})

const enviar = document.getElementById("cadastro");

function exibirMensagem(tipo, texto) {
  modal.modal();
  modal.mensagem(tipo, texto);
}

function validar(e) {
  e.preventDefault();
  const dadosDigitados = {
    nome: document.getElementById("nome").value.trim(),
    email: document.getElementById("email").value.trim(),
    senha: document.getElementById("senha").value.trim(),
  };

  const valida = Object.values(dadosDigitados).every((dado) => dado !== "");

  // regex simples para validar o email
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dadosDigitados.email);

  if (!valida) {
    const mens = "Error: Preencha todos os campos antes de enviar.";
    exibirMensagem("erro", mens);
    return;
  } else if (dadosDigitados["nome"].length <= 2) {
    const mens = "Error: O nome deve ter mais de 2 caracteres.";
    exibirMensagem("erro", mens);
    return;
  } else if (!emailValido) {
    const mens = "Error: Insira um e-mail válido (ex: usuario@gmail.com).";
    exibirMensagem("erro", mens);
    return;
  } else if (dadosDigitados["senha"].length <= 3) {
    const mens = "Error: A senha tem que ter mais de 3 caracteres.";
    exibirMensagem("erro", mens);
    return;
  }

  localStorage.setItem("nome", dadosDigitados.nome);
  localStorage.setItem("email", dadosDigitados.email);
  localStorage.setItem("senha", dadosDigitados.senha);

  const sucess = "Cadastro feito com sucesso!";
  exibirMensagem("sucesso", sucess);

  const fechar = document.getElementById("fechar");

  fechar.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  setTimeout(()=>{
    window.location.href = "../index.html";
  },6000)
}

enviar.addEventListener("click", validar);
