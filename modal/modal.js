export function modal() {
  const content_modal = document.getElementById("content-modal");
  const modal_Close = document.getElementById("fechar");

  //abrindo o modal
  content_modal.classList.add("active");

  //fechado o modal

  modal_Close.addEventListener("click", () =>
    content_modal.classList.remove("active")
  );
}

// função para exibir a mensagem

export function mensagem(tipo, mens) {
  const head_Color = document.getElementById("head-color");
  const icon_erro = document.getElementById("icon_erro");
  const icon_sucess = document.getElementById("icon_sucess");
  const texto = document.getElementById("text");

  if (tipo === "erro") {
    head_Color.classList.add("active");

    icon_sucess.classList.remove("active");

    icon_erro.classList.add("active");
  } 
  else if (tipo === "sucesso") {
    head_Color.classList.remove("active");

    icon_erro.classList.remove("active");

    icon_sucess.classList.add("active");
  }

  texto.textContent = mens;
}
