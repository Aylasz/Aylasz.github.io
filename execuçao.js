document.addEventListener("DOMContentLoaded", function () {
    const materia = document.querySelector(".materia");

    if (materia) {
        // Define os estilos iniciais da matéria
        materia.style.opacity = "0";
        materia.style.transform = "translateY(50px)";

        // Adiciona a animação após a página carregar
        setTimeout(() => {
            materia.style.transition = "opacity 1s ease, transform 1s ease";
            materia.style.opacity = "1"; // Torna visível
            materia.style.transform = "translateY(0)"; // Reseta a posição
        }, 100); // Pequeno atraso para aplicar o estilo inicial
    } else {
        console.error("Elemento .materia não encontrado!");
    }
});