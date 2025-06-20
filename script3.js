// Animación del corazón inicial
const corazonInicial = document.querySelector('.corazon-inicial');
corazonInicial.addEventListener('animationiteration', () => {
    // Después de 2 segundos, el corazón inicial desaparece y aparece el árbol
    setTimeout(() => {
        corazonInicial.style.display = 'none';
        document.querySelector('.arbol').style.display = 'block';
        crecerArbol();
    }, 2000);
});

// Función para crecer el árbol
function crecerArbol() {
    const tronco = document.querySelector('.tronco');
    tronco.style.height = '200px'; // Alto final del tronco

    // Después de 2 segundos, aparecen las ramas
    setTimeout(() => {
        document.querySelector('.ramas').style.display = 'block';
        aparecerHojas();
    }, 2000);
}

// Función para aparecer las hojas (corazones de colores pastel)
function aparecerHojas() {
    const hojas = document.querySelector('.hojas');
    for (let i = 0; i < 50; i++) {
        const corazonHoja = document.createElement('div');
        corazonHoja.classList.add('corazon-hoja');
        corazonHoja.style.top = `${Math.random() * 100}px`;
        corazonHoja.style.left = `${Math.random() * 100}px`;
        corazonHoja.style.background = `hsl(${Math.random() * 360}, 100%, 85%)`; // Color pastel aleatorio
        hojas.appendChild(corazonHoja);
    }

    // Después de 2 segundos, aparece el contador
    setTimeout(() => {
        aparecerContador();
    }, 2000);
}

// Función para aparecer el contador
function aparecerContador() {
    const contador = document.querySelector('.contador');
    contador.style.opacity = '1';
    contador.style.transform = 'translate(-50%, -50%) scale(1)';
    contador.style.top = '50%';
    contador.style.left = '50%';
    iniciarContador();
}

// Función para iniciar el contador
function iniciarContador() {
    const fechaInicio = new Date('2025-05-20T00:00:00');
    setInterval(() => {
        const fechaActual = new Date();
        const diferencia = fechaActual - fechaInicio;
        const anos = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
        const meses = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const segundos = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / 1000);
        document.getElementById('anos').textContent = anos;
        document.getElementById('meses').textContent = meses;
        document.getElementById('dias').textContent = dias;
        document.getElementById('segundos').textContent = segundos;
    }, 1000);

    // Después de 1 segundo, aparece el texto
    setTimeout(() => {
        aparecerTexto();
    }, 1000);
}

// Función para aparecer el texto
function aparecerTexto() {
    const texto = document.querySelector('.texto');
    texto.style.opacity = '1';
    texto.style.transform = 'translateX(0)';
    texto.style.transition = 'all 1s';
}
