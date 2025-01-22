// Animação com GSAP
gsap.from(".title", {
  duration: 1,
  y: -50,
  opacity: 0,
});

gsap.from(".animacao", {
  duration: 1.5,
  x: -100,
  opacity: 0,
  stagger: 0.3, // Tempo entre elementos
});

// Animação para imagens da galeria
window.addEventListener("load", () => {
  gsap.from(".gallery img", {
    duration: 1,
    scale: 1,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
  });
});

// Animação com GSAP para aumentar o tamanho da imagem quando o mouse passar
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  // Quando o mouse passar sobre a imagem
  image.addEventListener('mouseenter', () => {
    gsap.to(image, {
      scale: 1.5,   // Aumenta a escala para 1.1
      duration: 0.01,  // Duração da animação
      ease: 'power1.out'  // Efeito de desaceleração ao final
    });
  });

  // Quando o mouse sair da imagem
  image.addEventListener('mouseleave', () => {
    gsap.to(image, {
      scale: 1,     // Retorna ao tamanho original
      duration: 0.01,  // Duração da animação
      ease: 'power1.out'  // Efeito de desaceleração ao final
    });
  });
});