document.addEventListener('DOMContentLoaded', function() {
    // Inicia todos os carrosséis
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
      startCarousel(carousel);
    });
  });
  
  function startCarousel(carousel) {
    let index = 0;
    const items = carousel.querySelectorAll('.carousel-item');
    if (items.length > 0) {
      // Exibe o primeiro item
      items[0].classList.add('active');
      // Roda automaticamente a cada 5 segundos
      setInterval(() => {
        items[index].classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
      }, 5000);
    }
  }
  
  function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % items.length;
    items[activeIndex].classList.add('active');
  }
  
  function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.carousel-item');
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    items[activeIndex].classList.add('active');
  }
  