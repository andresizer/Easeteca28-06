var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
        iconMenu.setAttribute("src","imagens/close.png");
    }else{
        iconMenu.setAttribute("src","imagens/menu.png");
    }

   menu.classList.toggle('active');
});
// Obtém referência ao formulário de contato
const contactForm = document.getElementById('contact-form');

// Adiciona evento de envio ao formulário
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  // Obtém os valores dos campos do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Lógica de validação dos campos
  if (name.trim() === '') {
    alert('Por favor, informe seu nome.');
    return;
  }

  if (email.trim() === '') {
    alert('Por favor, informe seu email.');
    return;
  }

  if (message.trim() === '') {
    alert('Por favor, escreva uma mensagem.');
    return;
  }

  // Lógica de envio do formulário
  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Mensagem:', message);

  // Limpa os campos do formulário após o envio
  contactForm.reset();
});
