document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Evita o comportamento padrão de navegação
        
        // Adiciona a classe "loading" que vai iniciar a transição
        document.body.classList.add('loading');
        
        // Aguarda o tempo da transição (1 segundo) e então redireciona
        setTimeout(() => {
            window.location.href = link.href;  // Redireciona para a página destino
        }, 1000); // Tempo igual ao da transição
    });
});


document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Evita o comportamento padrão de navegação
        
        // Adiciona a classe "loading" que vai iniciar a transição
        document.body.classList.add('loading');
        
        // Aguarda o tempo da transição (1 segundo) e então redireciona
        setTimeout(() => {
            window.location.href = link.href;  // Redireciona para a página destino
        }, 1000); // Tempo igual ao da transição
    });
});


document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Evita o comportamento padrão de navegação
        
        // Adiciona a classe "loading" que vai iniciar a transição
        document.body.classList.add('loading');
        
        // Aguarda o tempo da transição (1 segundo) e então redireciona
        setTimeout(() => {
            window.location.href = link.href;  // Redireciona para a página destino
        }, 1000); // Tempo igual ao da transição
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('main-title');
    const text = title.innerText;
    title.innerHTML = '';  // Limpar o conteúdo original
  
    // Envolver cada letra com <span>, e adicionar <span> para espaços
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      
      if (char === ' ') {
        const space = document.createElement('span');
        space.classList.add('space');
        title.appendChild(space);  // Adicionar o espaço
      } else {
        const span = document.createElement('span');
        span.textContent = char;
        title.appendChild(span);  // Adicionar a letra
      }
    }
  });
  
