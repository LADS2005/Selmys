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
        const frases = ['Te amo, preciosa', 'Eres mi adoración!', '¡Gracias por amarme!', '¡Por favor, nunca te vayas!', 'Soy tan feliz de ser tu novio', 'mua mua', 'Eres mi sueño hecho realidad', 'Selmyta de mi vida', 'Desearia estar contigo', 'No puedo dejar de pensar en ti', 'Mi deseo es tenerte', 'Te AMOOO SELMY', 'Seamos felices juntos', 'Te entrego mi vida entera', 'Soy todo tuyo', 'seamos eternos juntos', 'eres mi vida entera', 'me enamoran tus ojos', 'mi chica ideal', 'eres el amor de mi vida', 'lloro de amor por ti', 'por ti deseo ser mejor persona'];
        return frases[Math.floor(Math.random() * frases.length)];
    }
});