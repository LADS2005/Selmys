const textoCompleto = `Selmy, esto lo he hecho especialmente para ti y solo a ti, quien dedica una página web? nadie JAJAJA pero yo quiero hacerlo, me inspiras a crear, a aprender y también a mejorar, quizá no sea una página de lujo con muchas cosas o algún detalle tan lindo pero lo hago con el corazón y con todo mi amor;

Selmy, jamás dejaré de amarte, ni por un segundo pues soy tan feliz contigo realmente, quisiera estar contigo ahora mismo, DESEO estarlo, jamás deseé algo con todas mis fuerzas, con todas mis ganas sino hasta que tú llegaste.

Dios, soy tan afortunado de ser tu novio, es inexplicable lo que me haces sentir sin duda alguna. Comparte tu vida conmigo así como yo quiero compartir la mía contigo. De verdad que te adoro. TE AMO SELMY, jamás dudes de eso en verdad, es el amor más puro y sincero que jamás podré darle a nadie, solo deseo dártelo a ti.

¡FELIZ PRIMER MES Y FELIZ CUMPLE MI VIDA HERMOSA! <3`;

const botonInicio = document.getElementById("boton-inicio");
const introTexto = document.getElementById("intro-texto");
const imagen = document.getElementById("imagen-central");
const botonSiguiente = document.getElementById("boton-siguiente");
let index = 0;
let audio = new Audio("./musica/electriclove.mp3");
audio.volume = 0.5;
audio.loop = false;

// Efecto máquina de escribir
function escribirTexto() {
    introTexto.style.display = "block";
    if (index < textoCompleto.length) {
        introTexto.innerHTML += textoCompleto.charAt(index);
        index++;
        setTimeout(escribirTexto, 50);
    } else {
        setTimeout(() => {
            introTexto.style.transition = "opacity 2s ease";
            introTexto.style.opacity = 0;
            setTimeout(() => {
                introTexto.style.display = "none";
                mostrarImagenYBoton();
            }, 2000);
        }, 1000);
    }
}

function mostrarImagenYBoton() {
    imagen.style.display = "block";
    imagen.classList.add("aparecer-imagen");
    imagen.style.animation += ", palpitar 2s infinite ease-in-out";

    audio.onended = () => {
        imagen.classList.remove("aparecer-imagen");
        imagen.classList.add("desaparecer-imagen");
        setTimeout(() => {
            imagen.style.display = "none";
            botonSiguiente.style.display = "block";
            botonSiguiente.classList.add("aparecer-boton");
        }, 1000);
    };
}

botonInicio.addEventListener("click", () => {
    botonInicio.style.transition = "opacity 1s ease";
    botonInicio.style.opacity = 0;
    setTimeout(() => {
        botonInicio.style.display = "none";
        audio.play();
        escribirTexto();
    }, 1000);
});

botonSiguiente.addEventListener("click", () => {
    window.open("./documentos/sorpresa.pdf", "_blank");
});

function crearEstrellas(contenedor) {
    for (let i = 0; i < 70; i++) {
        const estrella = document.createElement("div");
        estrella.classList.add("estrella");
        estrella.style.top = `${Math.random() * 100}%`;
        estrella.style.left = `${Math.random() * 100}%`;
        estrella.style.width = estrella.style.height = `${Math.random() * 2 + 1}px`;
        estrella.style.animationDelay = `${Math.random() * 5}s`;
        contenedor.appendChild(estrella);
    }
}
crearEstrellas(document.querySelector(".estrellas-izquierda"));
crearEstrellas(document.querySelector(".estrellas-derecha"));
