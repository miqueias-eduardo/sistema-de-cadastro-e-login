import * as modal from "./modal/modal.js";

//inserindo o modal no html
fetch("./modal/modal.html")
  .then((res) => res.text())
  .then((mod) => {
    document.body.insertAdjacentHTML("afterbegin", mod);
  });

const enviar = document.getElementById("enviar");

function exibirMensagem(tipo, texto) {
  modal.modal();
  modal.mensagem(tipo, texto);
}

function validar(e) {
  e.preventDefault();

  const dadosDigitados = {
    nome: document.getElementById("nome").value.trim().toLowerCase(),

    email: document.getElementById("email").value.trim().toLowerCase(),

    senha: document.getElementById("senha").value.trim(),
  };

  const dadosSalvos = {
    nome: (localStorage.getItem("nome") || "").trim().toLowerCase(),

    email: (localStorage.getItem("email") || "").trim().toLowerCase(),

    senha: (localStorage.getItem("senha") || "").trim(),
  };

  const comparar = Object.keys(dadosDigitados).every(
    (campo) => dadosDigitados[campo] === dadosSalvos[campo]
  );

  const salvoValido = Object.values(dadosSalvos).every((dado) => dado !== "");

  const digitadoValido = Object.values(dadosDigitados).every(
    (dado) => dado !== ""
  );

  if (!digitadoValido) {
    const mens = "Error: Preencha todos os campos antes de enviar.";
    exibirMensagem("erro", mens);
    return;
  }
  if (!salvoValido || !comparar) {
    const mens = "Error: Os dados inseridos estão incorretos.";
    exibirMensagem("erro", mens);
    return;
  }

  const mens = "Login feito com sucesso!";
  exibirMensagem("sucesso", mens);
}

enviar.addEventListener("click", validar);
