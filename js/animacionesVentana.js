document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const carousel = document.getElementById('carouselExample');
  let isAnimating = false;

  function updateNavbar() {
    if (isAnimating) return;

    const carouselBottom = carousel.offsetTop + carousel.offsetHeight;
    const isScrolled = window.scrollY > carouselBottom - 100;

    if (isScrolled && !navbar.classList.contains('navbar-scroll')) {
      isAnimating = true;
      navbar.classList.add('navbar-scroll', 'xyz-in');
      navbar.classList.remove('xyz-out');
      
      setTimeout(() => {
        isAnimating = false;
      }, 400); // Duración de la animación
    } else if (!isScrolled && navbar.classList.contains('navbar-scroll')) {
      isAnimating = true;
      navbar.classList.add('xyz-out');
      navbar.classList.remove('xyz-in');
      
      setTimeout(() => {
        navbar.classList.remove('navbar-scroll');
        isAnimating = false;
      }, 400); // Duración de la animación
    }
  }

  window.addEventListener('scroll', updateNavbar);
  window.addEventListener('resize', updateNavbar);
  updateNavbar();
});



document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".container-2"); // Selecciona los contenedores con la animación

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Aplica la clase visible cuando entra al viewport
        } else {
          entry.target.classList.remove("visible"); // Quita la clase visible al salir del viewport (opcional)
        }
      });
    },
    { threshold: 0.2 } // Activa cuando el 20% del bloque es visible
  );

  targets.forEach((target) => observer.observe(target)); // Observa cada bloque con animación
});