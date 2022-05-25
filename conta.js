const inputSenha1 = document.getElementById("senha1");
const inputSenha2 = document.getElementById("senha2");
const cadastro = document.querySelector("#criarConta");
const inputEmail = document.getElementById("email");

let login = [];
let listaLogins = [];

cadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  addLogin();
});

function addLogin() {
  let listaLogins = JSON.parse(localStorage.getItem("Meus Logins")) || [];

  let email = inputEmail.value;
  let senha1 = inputSenha1.value;
  let senha2 = inputSenha2.value;

  let login = {
    email,
    senha1,
    senha2,
  };

  listaLogins.push(login);

  function criarConta() {
    if (email === login.email) {
      alert("O usuário já possui cadastro, entrar com email e senha");
      location.href = "/index.html";
      return;
    }
    if (senha1 !== senha2) {
      alert("Digite a mesma senha");
    } else {
      alert("Usuário cadastrado com sucesso!");
      location.href = "/index.html";
    }
  }
  console.log(listaLogins);

  criarConta();
  limparCampos();
  salvarNoStorage(listaLogins);
}

function limparCampos() {
  email.value = "";
  senha1.value = "";
  senha2.value = "";
}

function salvarNoStorage(listaLogins) {
  localStorage.setItem("Meus Logins", JSON.stringify(listaLogins));
}
