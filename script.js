document.addEventListener('DOMContentLoaded', () => {
  const carrossel = document.querySelector('.carrossel-imagens');
  const imagens = Array.from(carrossel.querySelectorAll('img'));
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');

  let indiceCentral = 0;

  function atualizarCarrossel() {
    // Remove todas as classes
    imagens.forEach(img => img.classList.remove('central'));
    // Adiciona classe 'central' na imagem atual
    imagens[indiceCentral].classList.add('central');

    // Calcular espaçamento total de cada imagem (largura + margem)
    const estilo = getComputedStyle(imagens[0]);
    const larguraImg = imagens[0].offsetWidth;
    const margemDireita = parseInt(estilo.marginRight);
    const margemEsquerda = parseInt(estilo.marginLeft);
    const espacamentoTotal = larguraImg + margemDireita + margemEsquerda;

    // Largura do container do carrossel
    const wrapper = document.querySelector('.carrossel-wrapper');
    // Deslocar para centralizar a imagem atual
    const deslocamento = -(indiceCentral * espacamentoTotal) + (wrapper.offsetWidth / 2) - (larguraImg / 2);

    carrossel.style.transform = `translateX(${deslocamento}px)`;
  }

  btnPrev.addEventListener('click', () => {
    indiceCentral = (indiceCentral - 1 + imagens.length) % imagens.length;
    atualizarCarrossel();
  });

  btnNext.addEventListener('click', () => {
    indiceCentral = (indiceCentral + 1) % imagens.length;
    atualizarCarrossel();
  });

  // Inicializa
  atualizarCarrossel();
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.mini-carrossel').forEach(carrossel => {
    const imagensWrapper = carrossel.querySelector('.mini-carrossel-imagens');
    const slides = imagensWrapper.querySelectorAll('img');
    let slideAtual = 0;

    // Função para mover as imagens para o slide atual
    const atualizarSlide = () => {
      if (slides.length === 0) return;

      const larguraSlide = slides[0].clientWidth;
      // Aplica a translação para mostrar o slide atual
      imagensWrapper.style.transform = `translateX(-${slideAtual * larguraSlide}px)`;
    };

    const btnPrev = carrossel.querySelector('.mini-btn.prev');
    const btnNext = carrossel.querySelector('.mini-btn.next');

    if (btnPrev && btnNext && imagensWrapper && slides.length > 0) {
      btnNext.addEventListener('click', () => {
        slideAtual = (slideAtual + 1) % slides.length;
        atualizarSlide();
      });

      btnPrev.addEventListener('click', () => {
        slideAtual = (slideAtual - 1 + slides.length) % slides.length;
        atualizarSlide();
      });

      // Atualiza inicialmente para garantir a posição
      atualizarSlide();
    } else {
      console.warn('Mini carrossel: elementos não encontrados ou slides vazios');
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

