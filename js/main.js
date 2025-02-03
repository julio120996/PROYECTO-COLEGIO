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
    interval: 900 // Intervalo de cambio de imagen cada 5 segundos
  });



  /* PARA EL VIDEO  DE LA PAJINA  */
  function openModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoFrame");
  
    // Detecta si es una pantalla pequeña
    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    
    if (isMobile) {
      // Abre el video en una nueva pestaña para pantallas pequeñas
      window.open("https://www.facebook.com/watch/?v=8571827252945837", "_blank");
    } else {
      // Configuración del video para pantallas grandes
      const videoParams = {
        height: 314,  // Altura fija para pantallas grandes
        width: 560,   // Ancho fijo para pantallas grandes
        href: "https://www.facebook.com/watch/?v=8571827252945837",
        show_text: false,
        t: 0,
        autoplay: 0  // No autoplay en pantallas grandes
      };
  
      iframe.src = `https://www.facebook.com/plugins/video.php?${new URLSearchParams(videoParams).toString()}`;
  
      // Ajuste de relación de aspecto
      iframe.style.aspectRatio = `${videoParams.width}/${videoParams.height}`;
      modal.style.display = "flex";
    }
  }
  
  function closeModal(event) {
    if (event.target.id === "videoModal") {
      const modal = document.getElementById("videoModal");
      const iframe = document.getElementById("videoFrame");
      
      // Limpiar src para detener el video al cerrar
      iframe.src = "";
      modal.style.display = "none";
    }
  }
  

