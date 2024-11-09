


document.addEventListener("DOMContentLoaded", function () {
    const subheader = document.querySelector(".section__subheader");
    const header = document.querySelector(".section__header");
    const description = document.querySelector(".description");
    const btnNosotros = document.querySelector(".btn-nosotros");
    const imageWrapper = document.querySelector(".image-wrapper");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === subheader) {
            subheader.classList.add("animate-subheader");
          } else if (entry.target === header) {
            header.classList.add("animate-header");
          } else if (entry.target === description) {
            description.classList.add("animate-description");
          } else if (entry.target === btnNosotros) {
            btnNosotros.classList.add("animate-btn");
          } else if (entry.target === imageWrapper) {
            imageWrapper.classList.add("animate-image");
          }
        }
      });
    }, { threshold: 0.5 }); // Activar animación cuando el elemento esté al menos al 50% visible
  
    observer.observe(subheader);
    observer.observe(header);
    observer.observe(description);
    observer.observe(btnNosotros);
    observer.observe(imageWrapper);
  });

  
  