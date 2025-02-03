// Pegando todos os links do menu
let menuLinks = document.querySelectorAll('.menu a');

// Função para remover 'active' de todos os links
function removeActiveClass() {
    menuLinks.forEach(link => link.classList.remove('active'));
}

// Configuração do Intersection Observer
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove a classe ativa de todos os links
            removeActiveClass();

            // Adiciona a classe ativa ao link correspondente
            let activeLink = document.querySelector(`.menu a[href="#${entry.target.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                console.log(activeLink);
            }
        }
    });
}, {
    threshold: 0.9 // Define que 60% da seção precisa estar visível para ativar
});


 // Observa todas as seções
 document.querySelectorAll('section').forEach(section => observer.observe(section));

 // Adicionando a rolagem suave ao clicar no menu
 menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão de navegação
        let targetId = link.getAttribute('href').substring(1); // Pega o id da seção
        let targetSection = document.getElementById(targetId);

        // Rolando suavemente até a seção alvo
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
