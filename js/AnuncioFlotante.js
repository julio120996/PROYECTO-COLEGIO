 // Cerrar el modal con animación
 
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


