const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const slideMenu = document.getElementById('slideMenu'); // Seleccionamos el menú lateralnst
const cardcontainer = document.querySelector('.card-container');
const container2 = document.querySelector('.container-2');
const modal2 =  document.querySelector('.modal-2');

// Establecer el modo predeterminado basado en el almacenamiento local (si existe)
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  navbar.classList.add('dark-mode');
  slideMenu.classList.add('dark-mode'); // Agregar clase al menú lateral
  cardcontainer.classList.add('dark-mode');
  container2.classList.add('dark-mode');
  modal2.classList.add('dark-mode');
}

themeToggle.addEventListener('change', function() {
  // Alternar el modo oscuro en el body y el navbar
  body.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
  slideMenu.classList.toggle('dark-mode');
  cardcontainer.classList.toggle('dark-mode');
  container2.classList.toggle('dark-mode');
  modal2.classList.toggle('dark-mode');

  // Guardar el estado en el almacenamiento local
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});