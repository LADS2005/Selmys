document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('boton');
    if (boton) {
        boton.addEventListener('click', () => {
            const frase = document.createElement('div');
            frase.classList.add('frase');
            frase.textContent = getRandomFrase();
            frase.style.position = 'absolute';
            const rect = boton.getBoundingClientRect();
            frase.style.top = `${rect.top + rect.height / 2}px`;
            frase.style.left = `${rect.left + rect.width / 2}px`;
            document.body.appendChild(frase);
            const velocidadX = Math.random() * 2 - 1; // Dirección aleatoria en X
            const velocidadY = Math.random() * 2 - 1; // Dirección aleatoria en Y
            let opacity = 1;
            const tiempoDesvanecimiento = 7000; // Tiempo en milisegundos
            const inicio = performance.now();
            function animar() {
                const tiempoTranscurrido = performance.now() - inicio;
                frase.style.top = `${parseFloat(frase.style.top) + velocidadY}px`;
                frase.style.left = `${parseFloat(frase.style.left) + velocidadX}px`;
                opacity = 1 - (tiempoTranscurrido / tiempoDesvanecimiento);
                frase.style.opacity = opacity;
                if (tiempoTranscurrido >= tiempoDesvanecimiento) {
                    frase.remove();
                } else {
                    requestAnimationFrame(animar);
                }
            }
            animar();
        });
    } else {
        console.error('No se encontró el elemento boton');
    }

    function getRandomFrase() {
        const frases = ['¡Hola!', '¡Adiós!', '¡Gracias!', '¡Por favor gei!'];
        return frases[Math.floor(Math.random() * frases.length)];
    }
});