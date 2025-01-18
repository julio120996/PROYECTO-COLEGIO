/* para la X para cerrar el Menu desliable */

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const slideMenu = document.getElementById("slideMenu");

  menuToggle.addEventListener("click", function () {
    slideMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    slideMenu.classList.remove("active");
  });

  // Manejo de submenús en dispositivos táctiles
  const menuItems = document.querySelectorAll(".menu-item > a");
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        e.preventDefault(); // Previene el comportamiento del enlace
        submenu.style.display =
          submenu.style.display === "block" ? "none" : "block";
      }
    });
  });
});

  /*--------------------------------------------------------------*/