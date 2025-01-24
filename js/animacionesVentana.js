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
  