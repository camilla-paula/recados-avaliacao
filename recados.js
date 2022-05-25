const formulario = document.querySelector("#recados");
const inputDescricao = document.querySelector("#descricao");
const inputDetalhamento = document.querySelector("#detalhamento");

const tabelaRecados = document.querySelector("#tabela");
const recado = [];
const listaRecados = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  addRecado();
});

document.addEventListener("DOMContentLoaded", pegarDadosStorage);

function proximoIdDisponivel() {
  // const recado = pegarDadosStorage();
  let max = 0;
  // const mensagens = pegarDadosStorage();

  // mensagens.forEach((recado) => {
  //   if (recado.id > max) {
  //     max = recado.id;
  //   }
  // });
  // return max;
  // let max = recado[0]?.id ?? 0;

  recado.forEach((item) => {
    if (item.id > max) {
      max = item.id;
    }
  });
  return max;
}

function addRecado() {
  let listaRecados = JSON.parse(localStorage.getItem("Meus Recados")) || [];

  let descricao = inputDescricao.value;
  let detalhamento = inputDetalhamento.value;

  const recado = {
    id: listaRecados.length + 1,
    descricao,
    detalhamento,
  };

  listaRecados.push(recado);

  console.log(listaRecados);

  salvarNaTabela(recado);
  limparCampos();
  salvarNoStorage(listaRecados);
}

function salvarNaTabela(dadosRecado) {
  let novaLinha = document.createElement("tr");
  let colunaId = document.createElement("td");
  let colunaDescricao = document.createElement("td");
  let colunaDetalhamento = document.createElement("td");
  let colunaAcoes = document.createElement("td");

  novaLinha.setAttribute("class", "registros");
  colunaId.innerHTML = dadosRecado.id;
  colunaDescricao.innerHTML = dadosRecado.descricao;
  colunaDetalhamento.innerHTML = dadosRecado.detalhamento;
  colunaAcoes.innerHTML = ` <button class="botaoApagar" onclick="apagarRecado()">Apagar</button>
  <button class="botaoEditar">Editar</button> `;

  novaLinha.appendChild(colunaId);
  novaLinha.appendChild(colunaDescricao);
  novaLinha.appendChild(colunaDetalhamento);
  novaLinha.appendChild(colunaAcoes);
  tabelaRecados.appendChild(novaLinha);
}

function limparCampos() {
  descricao.value = "";
  detalhamento.value = "";
}

function salvarNoStorage(listaRecados) {
  localStorage.setItem("Meus Recados", JSON.stringify(listaRecados));
}

function pegarDadosStorage() {
  let dadosStorage = JSON.parse(localStorage.getItem("Meus Recados"));

  if (dadosStorage) {
    for (let registro of dadosStorage) {
      salvarNaTabela(registro);
    }
  }
  return;
}

// testes que não deram certo:

// let trs = document.getElementsByClassName("botaoApagar");
// for (tr of trs) {
//   tr.setAttribute("onclick", "deletar(id)");
// }

// function deletar(id) {
//   setInterval(function () {
//     id.parentNode.remove();
//   });
// }

// let btnApagar.addEventListener("click", apagarRecado);

// document.getElementsByClassName("botaoApagar").remove();
// function apagarRecado() {
//   const index = recado.findIndex((item) => (item.id = id));

//   recado.splice(index, 1);
// }

// localStorage.setItem("Meus Recados", recado.id);

// let btnApagar = document.getElementsByClassName("botaoApagar");
// btnApagar?.addEventListener("click", apagarRecado);

// function apagarRecado(id) {
//   const index = listaRecados.findIndex((recado) => recado.id == id);

//   listaRecados.splice(index, 1);
// }
// apagarRecado();

// function apagarRecado() {
//   let dadosStorage = JSON.parse(localStorage.getItem("Meus Recados"));

//   if (dadosStorage) {
//     for (let recado of dadosStorage) {
//       listaRecados.splice(recado, 1);
//     }
//   }
//   return;
// }

const logout = document.getElementById("sair");
function sairDoSistema() {
  location.href = "/index.html";
}
