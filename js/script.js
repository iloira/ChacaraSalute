const slides = document.querySelectorAll('.carousel .slide');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));

  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
}

function setupCarousel() {
  setInterval(nextSlide, 3000);
}

setupCarousel();

//photos

const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

// Adicione os eventos de clique aos itens da galeria
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imageSrc = item.querySelector('img').getAttribute('src');
    modalImage.setAttribute('src', imageSrc);
    modal.style.display = 'block';
  });
});

// Feche o modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Feche o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var btnSubmit = document.querySelector('.btn-submit');
  
  btnSubmit.addEventListener('click', function() {
    alert('Dados enviados com sucesso!');
  });
});
