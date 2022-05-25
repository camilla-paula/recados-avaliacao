const inputSenha1 = document.getElementById("senha");
const inputEmail = document.getElementById("email");
const entrarSistema = document.getElementById("telaEntrada");
const listaLogins = [];

usuarioBD = JSON.parse(localStorage.getItem("Meus Logins"));

entrarSistema.addEventListener("submit", (e) => {
  e.preventDefault();

  entrar();
});

function entrar() {
  const email = inputEmail.value;
  const senha = inputSenha1.value;

  const usuarioValidacao = usuarioBD.find((login) => {
    return (
      login.email === email && login.senha1 === senha && login.senha2 === senha
    );
  });

  if (usuarioValidacao !== undefined) {
    location.href = "/recados.html";
  } else {
    alert("Usuário e/ou senha incorretos");
  }
}
