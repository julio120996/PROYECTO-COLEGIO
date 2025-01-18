// Opcional: Evita problemas en dispositivos táctiles
document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
      const menu = dropdown.querySelector('.dropdown-menu');
      menu.style.display = 'block';
    });
  
    dropdown.addEventListener('mouseleave', function () {
      const menu = dropdown.querySelector('.dropdown-menu');
      menu.style.display = 'none';
    });
  });
  
  /* para el carusel   */


  // Inicialización del carrusel de Bootstrap
  var myCarousel = document.getElementById('carouselExampleAutoplaying');
  var carousel = new bootstrap.Carousel(myCarousel, {
    ride: 'carousel',
    interval: 5000  // Intervalo de cambio de imagen cada 5 segundos
  });