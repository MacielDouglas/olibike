// Ativar links do Menu

const links = document.querySelectorAll(".header_menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
    link.setAttribute("aria-current", "page");
  }
}

links.forEach(ativarLink);

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(valor) {
  const elemento = document.getElementById(valor);
  if (elemento && elemento.matches('input[type="radio"]')) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

const produtoSelecionado = document.querySelector(
  'input[name="produto"]:checked'
);
const grupoBicicleta = document.getElementById("orcamento_bicicleta");
const grupoManutencao = document.getElementById("orcamento_manutencao");

if (produtoSelecionado && grupoBicicleta && grupoManutencao) {
  const tipo = grupoBicicleta.contains(produtoSelecionado)
    ? "bicicleta"
    : "manutencao";
  const tipoInput = document.getElementById(tipo);
  if (tipoInput) tipoInput.checked = true;
}

const tipos = document.querySelectorAll('input[name="tipo"]');

function limparProdutosOcultos(event) {
  const mostrarBicicletas = event.currentTarget.value === "bicicleta";
  const grupoAtivo = mostrarBicicletas ? grupoBicicleta : grupoManutencao;
  const grupoInativo = mostrarBicicletas ? grupoManutencao : grupoBicicleta;

  if (!grupoAtivo || !grupoInativo) return;

  grupoInativo
    .querySelectorAll('input[name="produto"]')
    .forEach((radio) => (radio.checked = false));
}

tipos.forEach((tipo) => tipo.addEventListener("change", limparProdutosOcultos));

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  if (!resposta) return;

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta_img img");
const galeriaContainer = document.querySelector(".bicicleta_img");

function trocarImagem(event) {
  const img = event.currentTarget;

  if (!galeriaContainer || img === galeriaContainer.firstElementChild) return;

  galeriaContainer.prepend(img);
  atualizarGaleria();
}

function atualizarGaleria() {
  [...galeriaContainer.children].forEach((img, index) => {
    if (index > 0) {
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      img.setAttribute("aria-label", `Destacar ${img.alt}`);
    } else {
      img.removeAttribute("tabindex");
      img.removeAttribute("role");
      img.removeAttribute("aria-label");
    }
  });
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
  img.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      trocarImagem(event);
    }
  });
}

if (galeriaContainer) {
  galeria.forEach(eventosGaleria);
  atualizarGaleria();
}

// Horario funcionamento aberto ou fechado

const funcionamento = document.querySelector("[data-semana]");

if (funcionamento && funcionamento.dataset.semana && funcionamento.dataset.horario) {
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

// Formulários: validação e confirmação local (sem back-end)

const formularios = document.querySelectorAll("form.form, form.orcamento");

function exibirStatus(form, mensagem, estado) {
  let status = form.querySelector(".form_status");

  if (!status) {
    status = document.createElement("p");
    status.className = "form_status";
    status.setAttribute("aria-live", "polite");
    status.tabIndex = -1;
    form.appendChild(status);
  }

  status.textContent = mensagem;
  status.dataset.estado = estado || "sucesso";
  status.setAttribute("role", estado === "erro" ? "alert" : "status");
  status.focus();
}

function validarProduto(form) {
  if (!form.classList.contains("orcamento")) return true;

  const produto = form.querySelector('input[name="produto"]:checked');

  if (produto) return true;

  exibirStatus(
    form,
    "Escolha uma bicicleta ou um plano de manutenção para continuar.",
    "erro"
  );
  return false;
}

function enviarFormulario(event) {
  const form = event.currentTarget;

  if (!validarProduto(form)) {
    event.preventDefault();
    return;
  }

  if (!form.checkValidity()) return;

  event.preventDefault();

  const mensagem =
    form.classList.contains("orcamento")
      ? "Orçamento validado. Esta é uma demonstração: nenhum dado foi enviado."
      : "Mensagem validada. Esta é uma demonstração: nenhum dado foi enviado.";

  form.reset();
  exibirStatus(form, mensagem, "sucesso");
}

formularios.forEach((form) => {
  form.addEventListener("submit", enviarFormulario);
});
