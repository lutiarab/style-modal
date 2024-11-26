// Ao clicar no X modal fecha
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
      // Ocultar o modal atual
      const modal = btn.closest('.modal');
      ocultarModal(modal.id);
  
    });
  });

  // Ao clicar no X modal fecha
document.querySelectorAll('.close-cliente').forEach(btn => {
    btn.addEventListener('click', () => {
      // Ocultar o modal atual
      const modal = btn.closest('.modal-clientes');
      ocultarModal(modal.id);
  
    });
  });

  // Ao clicar no X modal fecha
document.querySelectorAll('.close-concierge').forEach(btn => {
    btn.addEventListener('click', () => {
      // Ocultar o modal atual
      const modal = btn.closest('.modal-concierge');
      ocultarModal(modal.id);
  
    });
  });



//............................................................................................................................................
  

        // Modal Login

// Funções para mostrar e ocultar modais
function mostrarModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function ocultarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  // Ao clicar no botão de login, mostrar o modal de login
  document.getElementById('btn-login').addEventListener('click', () => {
    mostrarModal('modal-login');
  });
  
  // Ao enviar o formulário de login
  document.getElementById('form-login').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Envie os dados para o servidor usando AJAX ou um formulário HTML tradicional
    const dados = {
      email: document.getElementById('email').value,
      senha: document.getElementById('senha').value,
      menssagem: document.getElementById('menssagem').value
    };
  
    // Simulando uma resposta bem-sucedida do servidor
    fetch('seu-endpoint-de-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login realizado com sucesso!');
        ocultarModal('modal-login');
        // Redirecionar para a página inicial ou área restrita
        window.location.href = 'pagina-inicial.html';
      } else {
        alert('Email ou senha inválidos.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro inesperado. Tente novamente.');
    });
  });



//--------------------------------------------------------------------------------------------------------------------------------------------



        //modal cadastro cliente / direcionando para o login

// Funções para mostrar e ocultar modais
function mostrarModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function ocultarModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  // Ao clicar no botão de cadastro cliente, mostrar o modal de cadastro
  document.getElementById('btn-cadastro-cliente').addEventListener('click', () => {
    mostrarModal('modal-cadastro-cliente');
  });
  
  // Ao enviar o formulário de cadastro cliente
  document.getElementById('form-cadastro').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Envie os dados para o servidor usando AJAX ou um formulário HTML tradicional
    const dados = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      contato: document.getElementById('contato').value,
      endereco: document.getElementById('endereco').value,
      cidade: document.getElementById('cidade').value,
      estado: document.getElementById('estado').value,
      senha: document.getElementById('senha').value
    };
  
    // Simulando uma resposta bem-sucedida do servidor
    fetch('seu-endpoint-de-cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Cadastro realizado com sucesso!');
        ocultarModal('modal-cadastro');
        mostrarModal('modal-login');
      } else {
        alert('Erro ao realizar o cadastro.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro inesperado. Tente novamente.');
    });
  });
  

  //------------------------------------------------------------------------------------------------------------------------------------------


        //modal Cadastro Concierge / direcionando para o login


    // Ao clicar no botão de cadastro do concierge, mostrar o modal de cadastro
    document.getElementById('btn-cadastro').addEventListener('click', () => {
        mostrarModal('modal-cadastro');
    });

    // Ao enviar o formulário de cadastro do concierge
    document.getElementById('form-cadastro').addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
  
    // Envie os dados para o servidor usando AJAX ou um formulário HTML tradicional
    const dados = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      contato: document.getElementById('contato').value,
      cidade: document.getElementById('cidade').value,
      endereco: document.getElementById('endereco').value,
      servico: document.getElementById('servico').value,
      descricao_do_servico: document.getElementById('descricao_do_servico').value,
      senha: document.getElementById('senha').value
    };
  
    // Simulando uma resposta bem-sucedida do servidor
    fetch('seu-endpoint-de-cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Cadastro realizado com sucesso!');
        ocultarModal('modal-cadastro');
        mostrarModal('modal-login');
      } else {
        alert('Erro ao realizar o cadastro.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro inesperado. Tente novamente.');
    });
  });