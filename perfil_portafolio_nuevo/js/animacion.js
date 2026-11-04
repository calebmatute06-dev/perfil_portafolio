

const secciones = document.querySelectorAll(".Me, .Project, .Contact");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        } else {
            entrada.target.classList.remove("visible");
        }
    });
}, {threshold: 0.2 });

secciones.forEach((seccion) => {
    seccion.classList.add("oculto");
    observador.observe(seccion);
});