



document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-item");
        }
      });
    }, { threshold: 0.5 }); // Activar animación cuando el elemento esté al menos al 50% visible
  
    gridItems.forEach(item => observer.observe(item));
  });
  
  