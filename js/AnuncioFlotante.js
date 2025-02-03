 // Cerrar el modal con animación
 /*


 const closeModal = document.getElementById('closeModal');
 const modal = document.getElementById('modal');
 const card = document.querySelector('.modal .card');

 closeModal.addEventListener('click', function() {
   // Animación de la tarjeta al cerrar
   card.classList.add('xyz-out-zoom-down'); // Aplicamos la animación de salida para la X
   card.style.animation = 'fadeOutCard 0.5s ease-out'; // Animación de desaparición de la tarjeta

   // Animación de la X
   closeModal.classList.add('xyz-out-zoom-down'); // Animación de salida para la X

   setTimeout(() => {
     modal.style.display = 'none'; // Ocultamos el modal después de la animación
   }, 500); // Esperamos el tiempo de duración de la animación
 });


*/
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.imagen-item-3');
  const overlay = document.querySelector('.modal-2-overlay');
  const modal = document.querySelector('.modal-2');
  const cerrarBtn = document.querySelector('.modal-2-cerrar');

  items.forEach(item => {
    item.addEventListener('click', () => {
      // Obtener datos automáticamente del contenido del div
      const titulo = item.querySelector('h2').textContent.trim();
      const imagen = item.querySelector('img').src;
      const texto = item.dataset.texto;

      // Insertar en el modal
      modal.querySelector('.modal-2-titulo').textContent = titulo;
      modal.querySelector('.modal-2-imagen').src = imagen;
      modal.querySelector('.modal-2-texto').textContent = texto;

      // Mostrar modal con animación suave desde abajo
      overlay.classList.remove('hidden');
      modal.classList.remove('hidden');

      setTimeout(() => {
        overlay.classList.add('visible');
        modal.classList.add('visible');
      }, 10);
    });
  });

  // Función para cerrar el modal con animación de cierre
  const cerrarModal = () => {
    modal.classList.add('closing'); // Activar animación de cierre

    setTimeout(() => {
      overlay.classList.remove('visible');
      modal.classList.remove('visible', 'closing');
      overlay.classList.add('hidden');
      modal.classList.add('hidden');
    }, 500); // Tiempo para completar la animación
  };

  cerrarBtn.addEventListener('click', cerrarModal);
  overlay.addEventListener('click', cerrarModal);
});

