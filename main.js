const menu = document.querySelector('nav ul');
const menuBar = document.querySelector('nav .menu-icon');
const iconMenu = document.querySelector('nav .menu-icon img');
const saidaMenu = document.getElementById("exitButton");

saidaMenu.addEventListener("click", function() {
    document.querySelector("nav ul").classList.remove("active");
  });

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
        iconMenu.setAttribute("src","imagens/close.png");
    }else{
        iconMenu.setAttribute("src","imagens/menu.png");
    }

   menu.classList.toggle('active');
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores digitados pelo usuário
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Verificar as credenciais
    if (username === "seu_usuario" && password === "sua_senha") {
        alert("Login bem-sucedido!"); // Exibir uma mensagem de login bem-sucedido
        // Redirecionar para a página desejada ou executar outras ações
    } else {
        alert("Usuário ou senha inválidos!"); // Exibir uma mensagem de erro de login
    }
});
document.getElementById("exitButton").addEventListener("click", function() {
    document.querySelector("nav ul").classList.remove("active");
  });

